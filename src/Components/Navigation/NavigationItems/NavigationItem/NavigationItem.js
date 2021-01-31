import React from "react";
import classes from "../NavigationItem/NavigationItem.css";
import { NavLink } from "react-router-dom";

const navigationitem = (props) => (
  <li className="NavigationItem">
    <NavLink exact to={props.link} activeClassName="active">
      {props.children}
    </NavLink>
  </li>
);

export default navigationitem;
