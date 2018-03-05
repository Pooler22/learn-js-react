import React from "react";
import { shallow } from "enzyme";
import Hello from "./Hello";

describe("Hello component", () => {
  const wrapper = shallow(<Hello name="name" />);

  expect(wrapper).toMatchSnapshot();
});
