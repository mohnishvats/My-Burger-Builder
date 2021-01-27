import React from "react";
import "./NavigationItems.css";
import NavigationItem from "../NavigationItems/NavigationItem/NavigationItem";

const navigationitems = (props) => (
  <ul className="NavigationItems">
    <NavigationItem link="/" active>
      BurgerBuilder
    </NavigationItem>
    <NavigationItem link="/">Checkout</NavigationItem>
  </ul>
);

export default navigationitems;
