import { Howl } from "howler";
import beep from "./beep.mp3";

export const handleBeep = () => {
  var sound = new Howl({
    src: beep,
  });
  sound.play();
};
