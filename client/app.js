import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";
//import Raven from "raven-js";
//import { sentry_url, logException } from "./helpers/config";

import LoginBox from "./components/sign_in/LoginBox";
import Layout from "./components/Layout.jsx";
import Partload from "./components/partload/Partload.jsx";
import Home from "./components/home/Home.jsx";
import NavB from "./components/Navb.jsx";
import Planner from "./components/planner/Planner.jsx";
import Today from "./components/today/Today.jsx";
import Surveyor from "./components/surveyor_diary/Surveyor.jsx";
import UpdateData from "./components/update_data/UpdateData.jsx";
import RemovalFromStore from "./components/removal_from_store/RemovalFromStore.jsx";
import AccountManagement from "./components/account_management/AccountManagement.jsx";

// Raven.config(sentry_url, {
//   tags: { git_commit: "Hello Joseph",
//   user_level: "access level mega"}
// }).install()

// Raven.showReportDialog()//user gets a pop up

class TopComponent extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <NavB />
            <div>
              <Switch>
                <Route exact path="/" component={Layout} />
                <Route path="home" component={Home} />
                <Route path="planner" component={Planner} />
                <Route path="today" component={Today} />
                <Route path="surveyor" component={Surveyor} />
                <Route path="update_data" component={UpdateData} />
                <Route
                  path="account_management"
                  component={AccountManagement}
                />
                <Route path="partload" component={Partload} />
                <Route path="removal_from_store" component={RemovalFromStore} />
                <Route
                  path="account_management/add_user"
                  component={AccountManagement}
                />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(
  <TopComponent className="container" />,
  document.getElementById("app")
);
