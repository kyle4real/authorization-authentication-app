import React from "react";
import { useSelector } from "react-redux";
import PageSplit from "../UI/PageSplit/PageSplit";
import Table from "../UI/Table/Table";

const ProductsAndCustomers = () => {
    const { products } = useSelector((state) => state.products);
    const { customers } = useSelector((state) => state.customers);

    const productsThArr = ["Product Name", "Product Price"];
    const customersThArr = ["Customer Name"];

    const productsDisplayKeys = ["name", "price"];
    const customersDisplayKeys = ["name"];

    const productsTrArr = products?.length ? products : [];
    const customersTrArr = customers?.length ? customers : [];

    const productsTable = (
        <Table trArr={productsTrArr} thArr={productsThArr} displayKeys={productsDisplayKeys} />
    );
    const customersTable = (
        <Table trArr={customersTrArr} thArr={customersThArr} displayKeys={customersDisplayKeys} />
    );
    return PageSplit(productsTable, customersTable);
};

export default ProductsAndCustomers;
