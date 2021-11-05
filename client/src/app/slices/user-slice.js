import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        loading: true,
        error: null,
    },
    reducers: {
        replaceUser(state, action) {
            const { data } = action.payload;
            state.user = data.data;
        },
        resetUser(state) {
            state.user = null;
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

export const userActions = userSlice.actions;
export default userSlice;
