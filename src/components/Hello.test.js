import React from "react";
import { shallow } from "enzyme";
import Hello from "./Hello";

test("Hello component", () => {
  const wrapper = shallow(<Hello name={"name"} />);

  expect(wrapper).toMatchSnapshot();
});
