import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./Slice/GetProducts";
import { cartItemReducer } from "./Slice/CartSlice";

const store = configureStore({
    reducer: {
        productsReducer: productsReducer,
        cartItemReducer:cartItemReducer
    }
})

export {
    store
}