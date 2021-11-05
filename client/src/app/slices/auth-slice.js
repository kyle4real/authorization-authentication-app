import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        accessToken: null,
        loading: true,
        appLoading: true,
        error: null,
    },
    reducers: {
        replaceAccessToken(state, action) {
            const { data } = action.payload;
            state.accessToken = data.data.accessToken;
        },
        resetAccessToken(state) {
            state.accessToken = null;
        },
        // Loading
        setLoading(state, action) {
            state.loading = action.payload;
        },
        // app loading
        setAppLoading(state, action) {
            state.appLoading = action.payload;
        },
        // Error
        setError(state, action) {
            state.error = action.payload;
        },
    },
});

export const authActions = authSlice.actions;
export default authSlice;
