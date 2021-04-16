import React, { useState } from "react";
import { handleBeep } from "./utils/handleBeep";

const Alarm = ({ timer }) => {
  const [message, setMessage] = useState("Working");

  if (timer % 4 === 0) {
    setMessage("Test");
  }
  if (timer % 6 === 0) {
    setMessage("test 2");
  }

  return <h1>{message}</h1>;
};

export default Alarm;
