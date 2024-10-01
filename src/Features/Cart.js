import { createSlice } from "@reduxjs/toolkit";

const cartData = JSON.parse(localStorage.getItem("cart")) || [];
const total = JSON.parse(localStorage.getItem("totalAmount")) || 0;

const cartSlice = createSlice({
    name: "cart",
    initialState: { cartItem: cartData, totalAmount: total },
    reducers: {
        addItemToCart: (state, action) => {
            const existingIndex = state.cartItem.findIndex(item => item.id === action.payload.id);
            if (existingIndex >= 0) {
                state.cartItem[existingIndex].quantity += action.payload.quantity;
                state.cartItem[existingIndex].total = state.cartItem[existingIndex].price * state.cartItem[existingIndex].quantity;
            } else {
                state.cartItem.push({ ...action.payload });
            }
            state.totalAmount = state.cartItem.reduce((acc, item) => acc + item.total, 0)
            localStorage.setItem("cart", JSON.stringify(state.cartItem));
            localStorage.setItem("totalAmount", JSON.stringify(state.totalAmount));
        },
        incrementQuantity: (state, action) => {
            const item = state.cartItem.find(elem => elem.id === action.payload.id);
            if (item) {
                item.quantity += 1;
                item.total = item.price * item.quantity;
            }
            state.totalAmount = state.cartItem.reduce((acc, item) => acc + item.total, 0)
            localStorage.setItem("cart", JSON.stringify(state.cartItem));
            localStorage.setItem("totalAmount", JSON.stringify(state.totalAmount));
        },
        decrementQuantity: (state, action) => {
            const item = state.cartItem.find(elem => elem.id === action.payload.id);
            if (item) {
                if (item.quantity > 1) {
                    item.quantity -= 1;
                    item.total = item.price * item.quantity;
                }
            }
            state.totalAmount = state.cartItem.reduce((acc, item) => acc + item.total, 0)
            localStorage.setItem("cart", JSON.stringify(state.cartItem));
            localStorage.setItem("totalAmount", JSON.stringify(state.totalAmount));
        },
        removeItemFromCart: (state, action) => {
            state.cartItem = state.cartItem.filter(item => item.id !== action.payload.id);
            state.totalAmount = state.cartItem.reduce((acc, item) => acc + item.total, 0)
            localStorage.setItem("cart", JSON.stringify(state.cartItem));
            localStorage.setItem("totalAmount", JSON.stringify(state.totalAmount));
        }
    }
})

export const { addItemToCart, removeItemFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer