import React from "react";
import Burger from "../../../Components/Burger/Burger";
import Button from "../../UI/Button/Button";
import Aux from "../../../hoc/Aux";

const checkoutsummary = (props) => {
  return (
    <Aux>
      <div style={{ width: "100%", height: "300px", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button btnType="Danger" clicked>
        CANCEL
      </Button>
      <Button btnType="Success" clicked>
        CONTINUE
      </Button>
    </Aux>
  );
};

export default checkoutsummary;
