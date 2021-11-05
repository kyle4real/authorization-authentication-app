import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCustomers } from "../app/actions/customers-actions";
import { customersActions } from "../app/slices/customers-slice";

import Customers from "../components/Customers/Customers";

const CustomersPage = () => {
    const { loading, error } = useSelector((state) => state.customers);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCustomers());

        return () => {
            dispatch(customersActions.setError(null));
            dispatch(customersActions.setLoading(true));
            dispatch(customersActions.resetCustomers());
        };
    }, [dispatch]);

    if (loading) return <>loading</>;
    if (error) return <>there was an error loading this page: {error}</>;

    return <Customers />;
};

export default CustomersPage;
