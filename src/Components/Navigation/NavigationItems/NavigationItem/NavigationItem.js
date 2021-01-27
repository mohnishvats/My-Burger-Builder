import React from "react";
import classes from "../NavigationItem/NavigationItem.css";

const navigationitem = (props) => (
  <li className="NavigationItem">
    <a className={props.active ? "active" : null} href={props.link}>
      {props.children}
    </a>
  </li>
);

export default navigationitem;
