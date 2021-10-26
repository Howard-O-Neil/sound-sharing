
import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./App";
import { shallow } from "enzyme";

it("App component is rendered with the label Hello", () => {
  const app = shallow(
    <App message="Hello" />
  );
  expect(app.text()).toEqual("Hello");
});
