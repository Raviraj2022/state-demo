import React, { Component } from "react";

export default class Student3 extends Component {
  constructor(props) {
    super(props);
    this.state = { roll: this.props.roll, name: this.props.name };
  }
  render() {
    return (
      <div>
        <h3>Name is {this.props.name}</h3>
        <h3>Roll No is {this.props.roll}</h3>
      </div>
    );
  }
}
