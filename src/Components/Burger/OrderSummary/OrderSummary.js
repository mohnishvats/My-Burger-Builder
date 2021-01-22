import React from "react";
import Aux from "../../../hoc/Aux";

const ordersummary = (props) => {
  let transformedIngredients = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span>{igKey}</span>:{props.ingredients[igKey]}
      </li>
    );
  });

  return (
    <Aux>
      <h3>your order</h3>
      <p>A delecious burger with these following ingredients:</p>
      <ul>{transformedIngredients}</ul>
      <p>Continue To Checkout?</p>
    </Aux>
  );
};

export default ordersummary;
