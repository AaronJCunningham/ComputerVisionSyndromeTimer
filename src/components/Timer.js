import React from "react";

import useTimer from "../components/hooks/useTimer";
import { formatTime } from "../components/utils/formatTime";
import { formatAlarmMessage } from "./utils/formatAlarmMessage";
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

  return (
    <div className="app">
      <div className="timer">
        <p>{formatAlarmMessage(timer)}</p>
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
