import React from "react";
import Aux from "../../hoc/Aux";
import classes from "./layout.css";
import Toolbar from "../Navigation/Toolbaar/Toolbaar";

const layout = (props) => (
  <Aux>
    <Toolbar />

    <main className="Content">{props.children}</main>
  </Aux>
);

export default layout;
