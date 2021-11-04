import { createSlice } from "@reduxjs/toolkit";

const customersSlice = createSlice({
    name: "customers",
    initialState: {
        customers: null,
        loading: true,
        error: null,
    },
    reducers: {
        replaceCustomers(state, action) {
            const { data } = action.payload;
            state.customers = data.data;
        },
        resetCustomers(state) {
            state.customers = null;
        },
        addCustomer(state, action) {
            const { data } = action.payload;
            state.customers.push(data.data);
        },
        // Loading
        setLoading(state, action) {
            state.loading = action.payload;
        },
        // Error
        setError(state, action) {
            state.error = action.payload;
        },
    },
});

export const customersActions = customersSlice.actions;
export default customersSlice;
