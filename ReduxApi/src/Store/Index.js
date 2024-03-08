import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./Slice/GetProducts";

const store = configureStore({
    reducer: {
        productsReducer: productsReducer
    }
})

export {
    store
}