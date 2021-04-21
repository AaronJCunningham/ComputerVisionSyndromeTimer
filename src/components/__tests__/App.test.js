import React from "react";

import { shallow } from "enzyme";
import App from "../App";
import Timer from "../Timer";

it("contains a Timer component", () => {
  const wrapped = shallow(<App />);

  expect(wrapped.find(Timer).length).toEqual(1);
});
