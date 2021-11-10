import { customersActions } from "../slices/customers-slice";
import { productsActions } from "../slices/products-slice";
import * as api from "./../../api";

export const getProductsAndCustomers = ({ onComplete, onError }) => {
    return async (dispatch) => {
        try {
            const { data: productsData } = await api.getProducts();
            const { data: customersData } = await api.getCustomers();
            dispatch(productsActions.replaceProducts({ data: productsData }));
            dispatch(customersActions.replaceCustomers({ data: customersData }));
        } catch (error) {
            onError(error.response.data);
        } finally {
            onComplete();
        }
    };
};
