import React, { useState } from "react";

import Timer from "./Timer";
import Alarm from "./Alarm";

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

  return (
    <div>
      {timer === 0 ? <h1>Press Start</h1> : <Alarm timer={timer} />}
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
