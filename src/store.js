import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';

import applicationReducer from 'src/app/reducer';
import { history } from 'src/history';


const logger = createLogger({
  collapsed: true
});

const routerMiddle = routerMiddleware(history);

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  applicationReducer: applicationReducer,
});

const store = createStore(
  createRootReducer(history),
  applyMiddleware(routerMiddle, logger, thunk)
);

export default store;
