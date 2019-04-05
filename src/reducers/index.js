import { combineReducers } from 'redux';
import productsReducer from './products-reducer';
import basketReducer from './basket-reducer';

const reducers = combineReducers({
    productsReducer,
    basketReducer
});

export default reducers;