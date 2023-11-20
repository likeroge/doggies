import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { dogsReducer } from './reducers/dogsReducer';
import { userReducer } from './reducers/userReducer';
import { uiReducer } from './reducers/uiReducer';

const reducers = combineReducers({
  dogsReducer, userReducer, uiReducer,
});

export const store = createStore(reducers, applyMiddleware(thunk));
