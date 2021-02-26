import React from "react";
import "./NavigationItems.css";
import NavigationItem from "../NavigationItems/NavigationItem/NavigationItem";
import {NavLink} from 'react-router-dom';

const navigationitems = (props) => (
  <ul className="NavigationItems">
    <NavigationItem link="/" active>
      BurgerBuilder
    </NavigationItem>
    <NavigationItem link="/orders">Orders</NavigationItem>
  </ul>
);

export default navigationitems;
