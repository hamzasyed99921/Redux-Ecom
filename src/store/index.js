import { configureStore } from '@reduxjs/toolkit'
import { ProductsReducer } from './reducers/ProductsReducer'
import { devToolsEnhancer } from 'redux-devtools-extension';
import {CartReducer} from './reducers/CartReducer'; 

 const store = configureStore({
    reducer:{
         ProductsReducer,
         CartReducer
    },
    devToolsEnhancer
});

export default store;