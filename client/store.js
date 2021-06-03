import { applyMiddleware, createStore, compose } from "redux";
//import { syncHistoryWithStore} from 'react-router-redux'

import rootReducer from "./reducers/_combiner";
//connect-router
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
//
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./sagas/sagas";

//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const enhancers = compose(
//   window.devToolsExtension ? window.devToolsExtension() : f => f
//   )

//const sagaMiddleware = createSagaMiddleware();
// const middleware = applyMiddleware(
//   sagaMiddleware,
//   thunk,
//   createLogger({ collapsed: true })
// );

// const middleware = applyMiddleware(thunk)

//const enhancer = composeEnhancers(middleware);

/// connect-router
export const history = createBrowserHistory();

export default function configureStore(defaultState) {
  const store = createStore(
    rootReducer(history), // root reducer with router state
    defaultState,
    compose(
      applyMiddleware(
        routerMiddleware(history)
        //enhancer
        // for dispatching history actions
        // ... other middlewares ...
      )
    )
  );

  return store;
}

//took out middleware and logger from createStore (they are included in enhancer and seems to work...redux extension now works)

//if(module.hot){
// module.hot.accept('./reducers/', ()=>{
//   const nextRootReducer = require('./reducers/index').default
//   store.replaceReducer(nextRootReducer)
// })

//}

// sagaMiddleware.run(rootSaga)
