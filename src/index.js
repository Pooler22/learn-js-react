import React from "react";
import { render } from "react-dom";
import Hello from "./components/Hello";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <Hello name="Title" />
    <h2>Description{"\u2728"}</h2>
  </div>
);

render(<App />, document.getElementById("root"));
