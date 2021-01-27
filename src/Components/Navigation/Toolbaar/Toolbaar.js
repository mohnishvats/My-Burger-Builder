import React from "react";
import "./Toolbaar.css";
import Logo from "../../Burger/Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../../Navigation/NavigationItems/SideDrawer/DrawerToggle/DrawerToggle";

const toolbaar = (props) => (
  <header className="Toolbar">
    <DrawerToggle clicked={props.drawerToggleClicked} />
    <div className="LogoT">
      <Logo />
    </div>
    <nav className="DesktopOnly">
      <NavigationItems />
    </nav>
  </header>
);

export default toolbaar;
