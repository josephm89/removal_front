import { applyMiddleware, createStore, compose } from "redux";

import rootReducer from "./reducers/_combiner";
//connect-router
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
//
import { createLogger } from "redux-logger";

//redux-thunk
import thunk from "redux-thunk";

//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const enhancers = compose(
//   window.devToolsExtension ? window.devToolsExtension() : f => f
//   )

//const enhancer = composeEnhancers(middleware);

/// connect-router
export const history = createBrowserHistory();

export default function configureStore(defaultState) {
  const store = createStore(
    rootReducer(history), // root reducer with router state
    defaultState,
    compose(
      applyMiddleware(
        routerMiddleware(history),
        thunk
        //enhancer
        // for dispatching history actions
        // ... other middlewares ...
      )
    )
  );

  return store;
}

