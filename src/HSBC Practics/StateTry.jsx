import React, { Component } from "react";

class StateTry extends Component {
  constructor() {
    super()
    this.state = {
      greet: " Welcome",
      Person:"You"
     
    }
  }

  handleChange() {
    this.setState({
      greet: "Naweli",
      Person:"Tum sikh rhi ho"
      
    });
  }

  render() {
    return (
      <>
        <h1>
          {this.state.greet} {this.state.Person}
        </h1>
        <button onClick={() => this.handleChange()}>Click Me</button>
      </>
    );
  }
}
export default StateTry;
