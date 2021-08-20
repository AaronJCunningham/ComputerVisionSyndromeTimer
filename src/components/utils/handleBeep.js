import { Howl } from "howler";
import beep from "./Chime.mp3";

export const handleBeep = (timer) => {
  var sound = new Howl({
    src: beep,
  });
  if (timer === 0) {
    return;
  }
  if (timer % 1200 === 0) {
    sound.play();
  }

  if (timer % 1500 === 0) {
    sound.play();
  }
};
