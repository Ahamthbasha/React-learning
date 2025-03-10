import React, { Component } from "react";
import NormalComponent from "./NormalComponent";
import PureComponentEx from "./PureComponent";

class ParentComponent extends Component {
  constructor() {
    super();
    this.state = { name: "Bruce" };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ name: "Bruce" }); // Same value, no actual change
    }, 2000);
  }

  render() {
    console.log("Parent Component Rendered");
    return (
      <div>
        <h1>Parent Component</h1>
        <NormalComponent name={this.state.name} />
        <PureComponentEx name={this.state.name} />
      </div>
    );
  }
}

export default ParentComponent;
