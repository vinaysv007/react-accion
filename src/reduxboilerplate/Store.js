import { createStore } from 'redux';
import rootReducers from './reducers/index';

const initState = {}
const store = createStore(rootReducers, initState);

export default store;