import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        accessToken: null,
    },
    reducers: {
        replaceAccessToken(state, action) {
            const { data } = action.payload;
            state.accessToken = data.data.accessToken;
        },
        resetAccessToken(state) {
            state.accessToken = null;
        },
    },
});

export const authActions = authSlice.actions;
export default authSlice;
