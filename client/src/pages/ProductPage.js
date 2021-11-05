import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProduct } from "../app/actions/product-actions";
import { productActions } from "../app/slices/product-slice";
import Product from "../components/Product/Product";

const ProductPage = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.product);

    useEffect(() => {
        dispatch(getProduct(params.productId));
        return () => {
            dispatch(productActions.resetProduct());
            dispatch(productActions.setLoading(true));
            dispatch(productActions.setError(null));
        };
    }, [dispatch, params.productId]);

    if (loading) return <>loading</>;
    if (error) return <>there was an error loading this page: {error}</>;

    return <Product />;
};

export default ProductPage;
