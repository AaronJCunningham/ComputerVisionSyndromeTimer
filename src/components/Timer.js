import React from "react";

import useTimer from "../components/hooks/useTimer";
import { formatTime } from "../components/utils/formatTime";
import { handleBeep } from "./utils/handleBeep";

const Timer = () => {
  const {
    timer,
    isActive,
    isPaused,
    handleStart,
    handlePause,
    handleResume,
    handleReset,
  } = useTimer(0);

  console.log(timer);

  return (
    <div className="app">
      <div className="timer">
        <p>
          {timer >= 1200 ? (
            timer >= 1500 ? (
              <h1>Break</h1>
            ) : (
              <h1>Alarm</h1>
            )
          ) : (
            <h1>Working</h1>
          )}
        </p>
        <p>{formatTime(timer)}</p>
        {handleBeep(timer)}
        <div className="buttons">
          {!isActive && !isPaused ? (
            <button className="button" onClick={handleStart}>
              Start
            </button>
          ) : isPaused ? (
            <button className="button" onClick={handlePause}>
              Pause
            </button>
          ) : (
            <button className="button" onClick={handleResume}>
              Resume
            </button>
          )}
          <button className="button" onClick={handleReset} disabled={!isActive}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
