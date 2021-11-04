import * as api from "../../api";
import { salesActions } from "../slices/sales-slice";

export const getSales = () => {
    return async (dispatch) => {
        try {
            const { data } = await api.getSales();
            dispatch(salesActions.replaceSales({ data }));
        } catch (error) {
            let errorMessage;
            console.log(error.message);
            if (error.response && error.reponse.data.error) {
                errorMessage = error.response.data.error;
            } else errorMessage = error.message;
            dispatch(salesActions.setError(errorMessage));
        } finally {
            dispatch(salesActions.setLoading(false));
        }
    };
};
