import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../Components/Burger/Burger";

class burgerbuilder extends Component {
  render() {
    return (
      <Aux>
        <Burger />
        <div>build controls</div>
      </Aux>
    );
  }
}

export default burgerbuilder;
