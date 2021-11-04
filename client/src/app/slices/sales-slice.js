import { createSlice } from "@reduxjs/toolkit";

const salesSlice = createSlice({
    name: "sales",
    initialState: {
        sales: null,
        loading: true,
        error: null,
    },
    reducers: {
        replaceSales(state, action) {
            const { data } = action.payload;
            state.sales = data.data;
        },
        resetSales(state) {
            state.sales = null;
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

export const salesActions = salesSlice.actions;
export default salesSlice;
