export const intervals = {
    // change for testing
    hunger: 1200,
    loneliness: 2000,
    dirtiness: 4320,
    health: 360,
    sleepiness: 576000000000,
};

export const getNow = () => {
    return Math.round(Date.now() / 1000);
};

class Need {
    getAmount(lastFulfilled: number): number {
        // convert to percentage
        const value = Math.floor(((getNow() - lastFulfilled) / this.interval) * 100);
        if (value <= 100) return value;
        else return 100;
    }
    needsFulfilment(lastFulfilled: number): boolean {
        return getNow() - lastFulfilled > this.interval;
    }
    constructor(public interval: number) {}
}

export const Hunger = new Need(intervals.hunger);
export const Loneliness = new Need(intervals.loneliness);
export const Dirtiness = new Need(intervals.dirtiness);

export const getIsSick = (lastFed: number, lastPetted: number, lastCleaned: number): boolean => {
    if (
        getNow() - lastFed > intervals.hunger * 5 ||
        getNow() - lastPetted > intervals.loneliness * 4 ||
        getNow() - lastCleaned > intervals.dirtiness * 2.5
    ) {
        return true;
    } else return false;
};

export const getIsDead = (lastHealthy: number): boolean => {
    return getNow() - lastHealthy > intervals.health;
};