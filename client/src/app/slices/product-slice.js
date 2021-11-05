import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "product",
    initialState: {
        product: null,
        loading: true,
        error: null,
    },
    reducers: {
        replaceProduct(state, action) {
            const { data } = action.payload;
            state.product = data.data;
        },
        resetProduct(state) {
            state.product = null;
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

export const productActions = productSlice.actions;
export default productSlice;
