import React, { Component } from "react";
import ShoppingCart from "./ShoppingCart";

export default class App extends Component {
  render() {
    return (
      <div>
        <ShoppingCart items={["One Plus-Mobile", "Fastrack-Watch"]} />
      </div>
    );
  }
}
