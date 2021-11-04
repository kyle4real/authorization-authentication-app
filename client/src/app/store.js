import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/auth-slice";
import customersSlice from "./slices/customers-slice";
import productsSlice from "./slices/products-slice";
import salesSlice from "./slices/sales-slice";
import uiSlice from "./slices/ui-slice";

const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        auth: authSlice.reducer,
        products: productsSlice.reducer,
        customers: customersSlice.reducer,
        sales: salesSlice.reducer,
    },
});

export default store;
