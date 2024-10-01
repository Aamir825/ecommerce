import {configureStore} from '@reduxjs/toolkit'
import cartReducer from '../Features/Cart'
export const store = configureStore({
    reducer: {
        cart: cartReducer,
    }
})