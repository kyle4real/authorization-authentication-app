import { productsActions } from "../slices/products-slice";
import * as api from "../../api";

export const getProducts = () => {
    return async (dispatch) => {
        try {
            const { data } = await api.getProducts();
            dispatch(productsActions.replaceProducts({ data }));
        } catch (error) {
            let errorMessage;
            if (error.response.data.error) {
                errorMessage = error.response.data.error;
            } else errorMessage = error.message;
            dispatch(productsActions.setError(errorMessage));
        } finally {
            dispatch(productsActions.setLoading(false));
        }
    };
};

export const createProduct = (form, callback) => {
    return async (dispatch) => {
        try {
            const { data } = await api.createProduct(form);
            dispatch(productsActions.addProduct({ data }));
            callback();
        } catch (error) {
            console.log(error);
        }
    };
};
