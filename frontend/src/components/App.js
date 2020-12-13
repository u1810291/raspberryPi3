import React, { Component } from "react";
import ReactDOM from "react-dom";
import Container from "./Container/Container";
class App extends Component {
  render() {
    return (
      <div>
        <pre>Something </pre>
        Hello
        <Container />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById(`root`));
