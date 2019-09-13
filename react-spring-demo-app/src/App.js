import React from "react";
import Component1 from "./components/Component1";
import Component2 from "./components/Component2";
import Component3 from "./components/Component3";
import { Transition, animated } from "react-spring/renderprops";
import "./App.css";

class App extends React.Component {
  state = {
    showComponent3: false
  };

  toggle = e =>
    this.setState({
      showComponent3: !this.state.showComponent3
    });
  render() {
    return (
      <div className="App">
        <Component1 />
        <Component2 toggle={this.toggle} />
        <Transition
          native
          items={this.state.showComponent3}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
        >
          {show =>
            show &&
            (props => (
              <animated.div style={props}>
                <Component3></Component3>
              </animated.div>
            ))
          }
        </Transition>
      </div>
    );
  }
}

export default App;
