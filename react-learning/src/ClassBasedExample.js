import React, { Component } from "react";

class ClassBasedExample extends Component {
  state = {
    count: 0,
  };
  handleClick = () => {
    this.setState({count: this.state.count + 1});
  };
  render() {
    return (
      <>
        <h1>Class Based Example of Count: {this.state.count} times</h1>
        <button onClick={this.handleClick}>Click me</button>
      </>
    );
  }
}
export default ClassBasedExample;
