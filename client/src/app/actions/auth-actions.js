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
export const refresh = (onSuccess, onFailure) => {
    return async (dispatch) => {
        try {
            const { data } = await api.refresh();
            dispatch(authActions.replaceAccessToken({ data }));
            onSuccess();
        } catch (error) {
            onFailure();
        } finally {
            dispatch(authActions.setLoading(false));
        }
    };
};

export const logout = () => {
    return async (dispatch) => {
        try {
            await api.logout();
            dispatch(authActions.resetAccessToken());
        } catch (error) {
            console.log(error);
        }
    };
};
