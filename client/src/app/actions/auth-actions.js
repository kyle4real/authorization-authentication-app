import { authActions } from "../slices/auth-slice";
import * as api from "../../api";

export const login = (form, callback) => {
    return async (dispatch) => {
        try {
            const { data } = await api.login(form);
            dispatch(authActions.replaceAccessToken({ data }));
            callback();
        } catch (error) {
            console.log(error);
        }
    };
};
export const register = (form, callback) => {
    return async (dispatch) => {
        try {
            const { data } = await api.register(form);
            dispatch(authActions.replaceAccessToken({ data }));
            callback();
        } catch (error) {
            console.log(error);
        }
    };
};
export const refresh = (callback) => {
    return async (dispatch) => {
        try {
            const { data } = await api.refresh();
            dispatch(authActions.replaceAccessToken({ data }));
        } catch (error) {
            let errorMessage;
            if (error.response.data.error) {
                errorMessage = error.response.data.error;
            } else errorMessage = error.message;
            dispatch(authActions.setError(errorMessage));
        } finally {
            dispatch(authActions.setLoading(false));
        }
    };
};
