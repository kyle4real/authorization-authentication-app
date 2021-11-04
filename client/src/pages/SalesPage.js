import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSales } from "../app/actions/sales-actions";
import { salesActions } from "../app/slices/sales-slice";
import Sales from "../components/Sales/Sales";

const SalesPage = () => {
    const { loading, error } = useSelector((state) => state.sales);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSales());
        return () => {
            dispatch(salesActions.setLoading(true));
            dispatch(salesActions.resetSales());
        };
    }, [dispatch]);

    if (loading) return <>loading</>;
    if (error) return <>there was an error loading this page: {error}</>;

    return <Sales />;
};

export default SalesPage;
