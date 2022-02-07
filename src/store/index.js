import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import counterReducer from './redux/reducers';
import userReducer from './redux/user';
import { watcherSaga } from './sagas/rootSaga';

const reducer = combineReducers({
    counter: counterReducer,
    user: userReducer
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(reducer, {}, applyMiddleware(...middleware));

sagaMiddleware.run(watcherSaga)

export default store;