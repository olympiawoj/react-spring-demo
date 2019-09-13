import React from "react";
import { Spring } from "react-spring/renderprops";
//class based b/c it'll have button to toggle component3 so pass props up

class Component2 extends React.Component {
  render() {
    return (
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ delay: 1000, duration: 1000 }}
      >
        {props => (
          <div style={props}>
            <div style={c2style}>
              <h1>Component 1</h1>
              <p>
                Incididunt et qui occaecat tempor duis ut et elit reprehenderit
                nostrud. Officia adipisicing veniam quis fugiat. Tempor nostrud
                eu enim tempor ut veniam veniam. Velit commodo reprehenderit
                dolor irure mollit veniam magna. Laboris excepteur ipsum anim
                Lorem tempor sit ut occaecat.
              </p>
              <button style={btn} onClick={this.props.toggle}>
                Toggle Component 3
              </button>
            </div>
          </div>
        )}
      </Spring>
    );
  }
}
export default Component2;

const c2style = {
  background: "slateblue",
  color: "white",
  padding: "1.5rem"
};

const btn = {
  background: "#333",
  color: "#fff",
  padding: "1rem 2rem",
  border: "none",
  textTansform: "uppercase",
  margin: "15px 0"
};
