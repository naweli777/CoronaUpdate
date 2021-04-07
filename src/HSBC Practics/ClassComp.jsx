import { Component } from "react";
import React from "react";

class ClassComp extends Component {
  render() {
    return (
      <>

        <h1>{this.props.children}</h1>
        <h1>Hello {this.props.name}</h1>
      </>
    );
  }
}

export default ClassComp;
