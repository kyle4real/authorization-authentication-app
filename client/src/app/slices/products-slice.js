import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: "sales",
    initialState: {
        products: null,
        loading: true,
        error: null,
    },
    reducers: {
        replaceProducts(state, action) {
            const { data } = action.payload;
            state.products = data.data;
        },
        resetProducts(state) {
            state.products = null;
        },
        addProduct(state, action) {
            const { data } = action.payload;
            state.products.push(data.data);
        },
        // loading
        setLoading(state, action) {
            state.loading = action.payload;
        },
        // error
        setError(state, action) {
            state.error = action.payload;
        },
    },
});

export const productsActions = productsSlice.actions;
export default productsSlice;
