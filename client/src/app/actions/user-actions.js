import * as api from "../../api";
import { userActions } from "../slices/user-slice";

export const getUser = () => {
    return async (dispatch) => {
        try {
            const { data } = await api.me();
            dispatch(userActions.replaceUser({ data }));
        } catch (error) {
            dispatch(userActions.setError(error.response.data));
        } finally {
            dispatch(userActions.setLoading(false));
        }
    };
};
