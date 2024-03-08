import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Statuses } from "../Statuses";
import axios from "axios";

const INI_STATE = {
    products: [],
    Status: Statuses


}
const GetProductsSlice = createSlice({
    name: "GET PRODUCTS",
    initialState: INI_STATE,
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state, action) => {
            state.Status = Statuses.GET_PRODUCT
        })
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.Status = Statuses.SUCCESS_PRODUCT
            // state.products = action.payload
            state.products.push(...action.payload)
        })
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.Status = Statuses.FAIL_PRODUCT
        })
    }
})

const { reducer } = GetProductsSlice

const fetchProducts = createAsyncThunk("fetch/prodcts", async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
})

export {
    fetchProducts,
    reducer as productsReducer
}
