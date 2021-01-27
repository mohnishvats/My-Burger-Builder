import React from "react";
import NavigationItems from "../../NavigationItems/NavigationItems";
import Logo from "../../../Burger/Logo/Logo";
import Aux from "../../../../hoc/Aux";

import Backdrop from "../../../UI/BackDrop/BackDrop";
import "./SideDrawer.css";

const sidedrawer = (props) => {
  let attachedClasses = ["SideDrawer", "Close"];
  if (props.open) {
    attachedClasses = ["SideDrawer", "Open"];
  }
  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")}>
        <div className="LogoS">
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};
export default sidedrawer;
