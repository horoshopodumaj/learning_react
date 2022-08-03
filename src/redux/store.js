import { createStore } from 'redux';
import reducer from './reducer/order';


const store = createStore(reducer);

export default store;