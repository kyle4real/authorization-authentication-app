import * as api from "../../api";
import { productActions } from "../slices/product-slice";

export const getProduct = (productId) => {
    return async (dispatch) => {
        try {
            const { data } = await api.getProduct(productId);
            dispatch(productActions.replaceProduct({ data }));
        } catch (error) {
            let errorMessage;
            if (error.response.data.error) {
                errorMessage = error.response.data.error;
            } else errorMessage = error.message;
            dispatch(productActions.setError(errorMessage));
        } finally {
            dispatch(productActions.setLoading(false));
        }
    };
};
