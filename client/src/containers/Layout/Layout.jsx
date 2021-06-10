import React from "react";
import Aux from "../AuxWrapper/AuxWrapper.js"
import Navb from "../../components/Navb";

class Layout extends React.Component {
  state = {}
  render() {
    return (
      <Aux>
        <Navb />
        <main> {this.props.children}</main>
      </Aux>     
  )}
}

export default Layout;
