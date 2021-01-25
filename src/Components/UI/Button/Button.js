import React from "react";
import classes from "../Button/Button.css";
import "./Button.css";

const button = (props) => {
  let btnType = [props.btnType, "Button"].join(" ");
  console.log(btnType);
  return (
    <button className={btnType} onClick={props.clicked}>
      {props.children}
    </button>
  );
};

export default button;
//{["Button", "Success"]}
