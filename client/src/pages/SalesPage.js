import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSales } from "../app/actions/sales-actions";
import { salesActions } from "../app/slices/sales-slice";
import Error from "../components/Error/Error";
import PageLoad from "../components/Loading/PageLoad";
import Sales from "../components/Sales/Sales";

const SalesPage = () => {
    const { loading, error } = useSelector((state) => state.sales);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSales());

        return () => {
            dispatch(salesActions.setError(null));
            dispatch(salesActions.setLoading(true));
            dispatch(salesActions.resetSales());
        };
    }, [dispatch]);

    if (loading) return <PageLoad />;
    if (error) return <Error error={error} />;

    return <Sales />;
};

export default SalesPage;
