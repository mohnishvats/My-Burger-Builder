import React, { Component } from "react";
import Checkout from "../../Components/Order/CheckoutSummary/CheckoutSummary";

class checkout extends Component {
  state = {
    ingredients: {
      salad: 1,
      meat: 1,
      cheese: 1,
      bacon: 1,
    },
  };
  render() {
    return (
      <div>
        <Checkout ingredients={this.state.ingredients} />
      </div>
    );
  }
}

export default checkout;
