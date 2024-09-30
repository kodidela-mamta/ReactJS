import React, { Component } from "react";

class ClassBasedExample extends Component {
  state = {
    count: 0,
  };
  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };
  componentDidMount() {
    console.log("component mounted");
  }
  componentDidUpdate() {
    console.log("component is updated");
  }
  componentWillUnmount() {
    console.log("component unmount");
  }
  render() {
    return (
      <>
        <h3>Class Based Example of Count: {this.state.count} times</h3>
        <button onClick={this.handleClick}>Click me</button>
        <span>Life Cycle Methods</span>
      </>
    );
  }
}
export default ClassBasedExample;
