import React from "react";
import Aux from "../../../hoc/Aux";
import Button from "../../UI/Button/Button";

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
      <p>
        <strong>Total Price :{props.price}$</strong>
      </p>
      <p>Continue To Checkout?</p>
      <Button btnType="Danger" clicked={props.purchaseCancelled}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>
        CONTINUE
      </Button>
    </Aux>
  );
};

export default ordersummary;
