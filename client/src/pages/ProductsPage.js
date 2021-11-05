import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../app/actions/products-actions";
import { productsActions } from "../app/slices/products-slice";
import Products from "../components/Products/Products";

const ProductsPage = () => {
    const { loading, error } = useSelector((state) => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
        return () => {
            dispatch(productsActions.setError(null));
            dispatch(productsActions.setLoading(true));
            dispatch(productsActions.resetProducts());
        };
    }, [dispatch]);

    if (loading) return <>loading</>;
    if (error) return <>there was an error loading this page: {error}</>;

    return <Products />;
};

export default ProductsPage;
