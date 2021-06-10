import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as commonActions from "../../store/actions/_common_actions";
import * as accountManagementActions from "../../store/actions/account_management_actions";
import * as signupActions from "../../store/actions/sign_up_actions";
import * as loginActions from "../../store/actions/login_actions";


class Home extends React.Component {
  componentDidMount() {
    // this.props.actions.loginActions.signInClick("test2@test.com", "password");
    this.props.actions.commonActions.getAllTripsFromRails();
  }

  render() {
    console.log(this.props);
    return <p>We are Home</p>;
  }
}

////

const mapStateToProps =  (state) => ({
  trips: state.trips 
});

const mapDispatchToProps = (dispatch) => ({
  actions: {
    commonActions:            bindActionCreators(commonActions,            dispatch),
    accountManagementActions: bindActionCreators(accountManagementActions, dispatch),
    loginActions:             bindActionCreators(loginActions,             dispatch),
    signUpActions:            bindActionCreators(signupActions,            dispatch),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
