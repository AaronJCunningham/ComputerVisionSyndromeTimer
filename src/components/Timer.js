import React from "react";

const Timer = ({ timer }) => {
  const handleMin = (timer) => {
    if (Math.floor(timer / 60) === 0) {
      return "00";
    } else if (timer / 60 < 10) {
      return `0${Math.floor(timer / 60)}`;
    } else {
      return Math.floor(timer / 60);
    }
  };

  console.log(Math.floor(timer / 60));

  const handleSecond = (timer) => {
    return timer % 60 < 10 ? "0" + (timer % 60) : timer % 60;
  };

  return (
    <h1 className="timer">
      {handleMin(timer)}:{handleSecond(timer)}
    </h1>
  );
};

export default Timer;
