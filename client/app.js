import React from "react";
import ReactDOM from "react-dom";
//redux
import { Provider } from "react-redux";
import configureStore, { history } from "./src/store/store";
//router
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
//container
import Layout from "./src/containers/Layout/Layout.jsx";
//routes
import Home from "./src/components/home/Home.jsx";
import Planner from "./src/components/planner/Planner.jsx";
import Today from "./src/components/today/Today.jsx";
import Surveyor from "./src/components/surveyor_diary/Surveyor.jsx";
import UpdateData from "./src/components/update_data/UpdateData.jsx";
import Partload from "./src/components/partload/Partload.jsx";
import RemovalFromStore from "./src/components/removal_from_store/RemovalFromStore.jsx";
import AccountManagement from "./src/components/account_management/AccountManagement.jsx";

const store = configureStore();

class TopComponent extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Router>
            <div>
              <Layout>
                <Switch>
                  <Route exact path="/"             component={Home} />
                  <Route path="/planner"            component={Planner} />
                  <Route path="/today"              component={Today} />
                  <Route path="/surveyor"           component={Surveyor} />
                  <Route path="/update_data"        component={UpdateData} />
                  <Route path="/account_management" component={AccountManagement} />
                  <Route path="/partload"           component={Partload} />
                  <Route path="/removal_from_store" component={RemovalFromStore} />
                </Switch>
              </Layout>
            </div>
          </Router>
        </ConnectedRouter>
      </Provider>
    );
  }
}

ReactDOM.render(
  <TopComponent className="container" />,
  document.getElementById("app")
);
