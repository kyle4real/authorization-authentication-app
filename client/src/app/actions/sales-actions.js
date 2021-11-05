import * as api from "../../api";
import { salesActions } from "../slices/sales-slice";

export const getSales = () => {
    return async (dispatch) => {
        try {
            const { data } = await api.getSales();
            dispatch(salesActions.replaceSales({ data }));
        } catch (error) {
            dispatch(salesActions.setError(error.response.data));
        } finally {
            dispatch(salesActions.setLoading(false));
        }
    };
};
