import React, { Component } from "react";
import ReactDOM from "react-dom";
class App extends Component {
  render() {
    return (
      <div>
        <pre>Something </pre>
        Hello
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById(`root`));
