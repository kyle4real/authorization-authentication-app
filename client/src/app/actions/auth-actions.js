import { authActions } from "../slices/auth-slice";
import * as api from "../../api";

export const login = (form) => {
    return async (dispatch) => {
        try {
            const { data } = api.login(form);
            dispatch(authActions.replaceAccessToken({ data }));
        } catch (error) {
            console.log(error);
        }
    };
};
export const register = (form) => {
    return async (dispatch) => {
        try {
            const { data } = api.register(form);
            dispatch(authActions.replaceAccessToken({ data }));
        } catch (error) {
            console.log(error);
        }
    };
};
export const refresh = () => {
    return async (dispatch) => {
        try {
            const { data } = api.refresh();
            dispatch(authActions.replaceAccessToken({ data }));
        } catch (error) {
            console.log(error);
        }
    };
};
