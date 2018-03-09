import { createStore, applyMiddleware, compose } from 'redux';
import createMiddlewares from './middlewares';
import rootReducer from './rootReducer';

export default (initialState, config) => {
    const middlewares = createMiddlewares(config);
    let composeEnhancers;
    if (process.env.NODE_ENV !== 'production') {
        composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    } else {
        composeEnhancers = compose;
    }
    const store = createStore(rootReducer, initialState, composeEnhancers(
        applyMiddleware(...middlewares)
    ));
    return store;
};
