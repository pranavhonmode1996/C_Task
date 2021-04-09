import {combineReducers, applyMiddleware, createStore, compose} from 'redux';
import thunk from 'redux-thunk';
import { addItemReducer, addToCart, confirmedOrders, getItems } from '../reducers/ItemReducer';

const initialState = {};

const reducer = combineReducers({
    addItem: addItemReducer,
    getItem: getItems,
    cart: addToCart,
    confirmedOrder: confirmedOrders,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;