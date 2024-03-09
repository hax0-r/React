import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    cart: [],
    quantity: 0,
}

const cartProductSlice = createSlice({
    name: "CART_PRODUCT",
    initialState: INITIAL_STATE,
    reducers: {
        addToCartAction: (state, action) => {
            state.cart.push(action.payload);
            state.quantity += 1; // Fix the increment syntax
        }
    }
})

const { addToCartAction } = cartProductSlice.actions;
const reducer = cartProductSlice.reducer; // Use reducer instead of reducers

export {
    addToCartAction,
    reducer as cartItemReducer // Export reducer as cartItemReducer
}
