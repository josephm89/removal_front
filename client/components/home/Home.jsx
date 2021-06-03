import React from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as commonActions from "../../actions/_common_actions";
import * as accountManagementActions from "../../actions/account_management_actions";
import * as signupActions from "../../actions/sign_up_actions";
import * as loginActions from "../../actions/login_actions";

const guest = {
  email: "test2@test.com",
  signup: "password",
  signupc: "password",
};

class Home extends React.Component {
  componentDidMount() {
    this.props.actions.signUpActions.signUpClick(
      "test2@test.com",
      "password",
      "password"
    );
  }

  render() {
    console.log(this.props);
    return <p>We are Home</p>;
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  actions: {
    commonActions: bindActionCreators(commonActions, dispatch),
    accountManagementActions: bindActionCreators(
      accountManagementActions,
      dispatch
    ),
    loginActions: bindActionCreators(loginActions, dispatch),
    signUpActions: bindActionCreators(signupActions, dispatch),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
