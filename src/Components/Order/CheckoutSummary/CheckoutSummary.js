import React from "react";
import Burger from "../../../Components/Burger/Burger";
import Button from "../../UI/Button/Button";

import "./CheckoutSummary.css";

const checkoutsummary = (props) => {
  return (
    <div className="CheckoutSummary">
      <div style={{ width: "100%", height: "300px", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button btnType="Danger" clicked={props.checkoutCancelled}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.checkoutContinued}>
        CONTINUE
      </Button>
    </div>
  );
};

export default checkoutsummary;
