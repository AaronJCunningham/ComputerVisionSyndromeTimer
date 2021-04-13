import React, { useState } from "react";
import { Howl } from "howler";

import Timer from "./Timer";

import beep from "./beep.mp3";

var myVar;

const App = () => {
  var [timer, setTimer] = useState(0);

  const myTimer = () => {
    myVar = setInterval(() => setTimer((timer += 1)), 1000);
  };

  const myStopFunction = () => {
    clearInterval(myVar);
  };

  const reset = () => {
    myStopFunction();
    setTimer(0);
  };

  const handleBeep = () => {
    var sound = new Howl({
      src: beep,
    });
    sound.play();
  };

  return (
    <div>
      <Timer timer={timer} />
      <div className="buttons">
        <button className="button" onClick={myTimer}>
          start
        </button>
        <button className="button" onClick={myStopFunction}>
          stop
        </button>
        <button className="button" onClick={reset}>
          reset
        </button>
      </div>
    </div>
  );
};

export default App;
