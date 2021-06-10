import React from "react";
import classes from "./Layout.css"
import Aux from "../AuxWrapper/AuxWrapper.js"
import Navb from "../../components/Navb";

class Layout extends React.Component {
  state = {}
  render() {
    return (
      <Aux>
        <Navb />
        <main className={classes.Content}> {this.props.children}</main>
      </Aux>     
  )}
}

export default Layout;
