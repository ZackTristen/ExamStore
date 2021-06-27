import {createStore} from 'redux';
import reducer from './src/reducers/reducer';

const store = createStore(reducer);

export default store;