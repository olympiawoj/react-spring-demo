import React from "react";

import { Spring } from "react-spring/renderprops";

export default function Component1() {
  return (
    <Spring
      from={{ opacity: 0, marginTop: -500 }}
      to={{ opacity: 1, marginTop: 0 }}
    >
      {props => (
        <div style={props}>
          <div style={c1style}>
            <h1>Component 1</h1>
            <p>
              Incididunt et qui occaecat tempor duis ut et elit reprehenderit
              nostrud. Officia adipisicing veniam quis fugiat. Tempor nostrud eu
              enim tempor ut veniam veniam. Velit commodo reprehenderit dolor
              irure mollit veniam magna. Laboris excepteur ipsum anim Lorem
              tempor sit ut occaecat.
            </p>
            <Spring
              from={{ number: 0 }}
              to={{ number: 10 }}
              //it will take 10 secs to animate, toFixed() gets rid of decimals
              config={{ duration: 10000 }}
            >
              {props => (
                <div style={props}>
                  <h1 style={counter}>{props.number.toFixed()}</h1>
                </div>
              )}
            </Spring>
          </div>
        </div>
      )}
    </Spring>
  );
}

const c1style = {
  background: "steelblue",
  color: "white",
  padding: "1.5rem"
};

const counter = {
  background: "#333",
  textAlign: "center",
  width: "100px",
  borderRadius: "50%",
  margin: "1rem auto"
};
