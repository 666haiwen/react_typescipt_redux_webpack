import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import defaultLogger from 'redux-logger';
import visApp from './reducers';

const configureStore = () => {
  const middlewares = [thunk];
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(defaultLogger);
  }
  return createStore(
    visApp,
    applyMiddleware(...middlewares)
  );
};

export default configureStore;
