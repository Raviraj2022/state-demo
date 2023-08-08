import React, { Component } from "react";

export default class Student1 extends Component {
  state = { name: "Ravi", roll: 55 };
  render() {
    return (
      <div>
        <h3>Name is {this.state.name}</h3>
        <h3>Roll No is {this.state.roll}</h3>
      </div>
    );
  }
}
