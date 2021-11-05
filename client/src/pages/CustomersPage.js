import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCustomers } from "../app/actions/customers-actions";
import { customersActions } from "../app/slices/customers-slice";

import Customers from "../components/Customers/Customers";
import Error from "../components/Error/Error";
import PageLoad from "../components/Loading/PageLoad";

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

    if (loading) return <PageLoad />;
    if (error) return <Error error={error} />;
    return <Customers />;
};

export default CustomersPage;
