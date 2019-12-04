import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

const store = (state, options) => {
    return createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(thunkMiddleware))
    );
};

export default store;