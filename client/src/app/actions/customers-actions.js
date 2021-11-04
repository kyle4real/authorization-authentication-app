import * as api from "../../api";
import { customersActions } from "../slices/customers-slice";

export const getCustomers = () => {
    return async (dispatch) => {
        try {
            const { data } = await api.getCustomers();
            dispatch(customersActions.replaceCustomers({ data }));
        } catch (error) {
            let errorMessage;

            if (error.response && error.response.data) {
                errorMessage = error.response.data.message;
            } else errorMessage = error.message;
            dispatch(customersActions.setError(errorMessage));
        } finally {
            dispatch(customersActions.setLoading(false));
        }
    };
};

export const createCustomer = (form, callback) => {
    return async (dispatch) => {
        try {
            const { data } = await api.createCustomer(form);
            dispatch(customersActions.addCustomer({ data }));
            callback();
        } catch (error) {
            console.log(error);
        }
    };
};
