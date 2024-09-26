import {configureStore} from '@reduxjs/toolkit'
import counterReducer from '../Features/Counter'
import productReducer from '../Features/Products'
export const store = configureStore({
    reducer: {
        counter: counterReducer,
        products: productReducer
    }
})