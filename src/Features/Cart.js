import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: { cartItem:[], totalAmount: 0 },
    reducers: {
        addItemToCart: (state, action)=>{
                state.cartItem.push({ ...action.payload });
        }
    }
})

export const {addItemToCart} = cartSlice.actions;
export default cartSlice.reducer