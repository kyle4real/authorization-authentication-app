import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getProductsAndCustomers } from "../app/actions/0_combo-actions";

import { getCustomers } from "../app/actions/customers-actions";
import { getProducts } from "../app/actions/products-actions";
import { customersActions } from "../app/slices/customers-slice";
import { productsActions } from "../app/slices/products-slice";

import Error from "../components/Error/Error";
import ProductsAndCustomers from "../components/ProductsAndCustomers/ProductsAndCustomers";

const ProductsAndCustomersPage = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const onComplete = () => setLoading(false);
        const onError = (err) => setError(err);

        dispatch(getProductsAndCustomers({ onError, onComplete }));

        return () => {
            // products
            dispatch(productsActions.resetProducts());
            // customers
            dispatch(customersActions.resetCustomers());
        };
    }, [dispatch, params.productId]);

    if (loading) return <>loading</>;
    if (error) return <Error error={error} />;

    return (
        <>
            <ProductsAndCustomers />
        </>
    );
};

export default ProductsAndCustomersPage;
