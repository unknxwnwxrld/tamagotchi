import happyImg from "../components/sprite/tamagotchi.png";
import sleepingImg from "../components/sprite/tama-sleep.png";
import hungryImg from "../components/sprite/tama-hungry.png";
import fedImg from "../components/sprite/tama-eat.png";
import lonelyImg from "../components/sprite/tama-lonely.png";
import pettedImg from "../components/sprite/tama-petted.png";
import dirtyImg from "../components/sprite/tama-dirty.png";
import hungryAndLonelyImg from "../components/sprite/tama-hungryAndLonely.png";
import hungryAndDirtyImg from "../components/sprite/tama-hungryAndDirty.png";
import lonelyAndDirtyImg from "../components/sprite/tama-lonelyAndDirty.png";
import hungryLonelyAndDirtyImg from "../components/sprite/tama-hungryDirtyAndLonely.png";
import deadImg from "../components/sprite/tama-dead.png";

const moods = {
    unborn: 'O',
    hatching: '0',
    happy: happyImg,
    sleeping: sleepingImg,
    hungry: hungryImg,
    fed: fedImg,
    lonely: lonelyImg,
    petted: pettedImg,
    dirty: dirtyImg,
    cleaned: 'censored',
    hungryAndLonely: hungryAndLonelyImg,
    hungryAndDirty: hungryAndDirtyImg,
    lonelyAndDirty: lonelyAndDirtyImg,
    hungryLonelyAndDirty: hungryLonelyAndDirtyImg,
    tired: 'img',
    sick: 'img',
    dead: deadImg,
};

export default moods;


