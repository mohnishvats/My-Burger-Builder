import React from "react";
import "./Toolbaar.css";
import Logo from "../../Burger/Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

const toolbaar = (props) => (
  <header className="header">
    <div>MENU</div>
    <Logo />
    <NavigationItems />
  </header>
);

export default toolbaar;
