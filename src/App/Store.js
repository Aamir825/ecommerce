import {configureStore} from '@reduxjs/toolkit'
import counterReducer from '../Features/Counter'
import cartReducer from '../Features/Cart'
export const store = configureStore({
    reducer: {
        counter: counterReducer,
        cart: cartReducer,
    }
})