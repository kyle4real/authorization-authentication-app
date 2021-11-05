import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createProduct } from "../../app/actions/products-actions";
import Form from "../UI/Form/Form";
import PageSplit from "../UI/PageSplit/PageSplit";
import Table from "../UI/Table/Table";
import { SProductBtn } from "./styles";

function numberWithCommas(x) {
    return x?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const formArr = [
    {
        label: "Product Name",
        name: "name",
        initialValue: "",
        type: "text",
    },
    {
        label: "Product Price",
        name: "price",
        initialValue: "",
        type: "text",
        valueParse: (value) => {
            return `$${numberWithCommas(value) || ""}`;
        },
        changeParse: (value) => {
            value = value.slice(1).split(",").join("");
            if (value === "") return "";
            if (isNaN(value)) return null;
            if (value.includes(".") && value.slice(value.indexOf(".") + 1).length > 2) return null;
            return value;
        },
    },
];

const ProductBtn = (value, dataObj) => {
    const history = useHistory();
    const onClick = () => history.push(`/products/${dataObj._id}`);
    return <SProductBtn onClick={onClick}>{value}</SProductBtn>;
};

const thArr = ["Product Name", "Product Price"];
const displayKeys = [["name", ProductBtn], "price"];

const Products = () => {
    const dispatch = useDispatch();
    const { products } = useSelector((state) => state.products);

    const onSubmitHandler = (form, callback) => {
        form = { ...form, price: Number(form.price) };
        dispatch(createProduct(form, callback));
    };

    const trArr = products?.length ? products : [];

    const newProductForm = (
        <Form
            onSubmit={onSubmitHandler}
            formTitle={"Create New Product"}
            submitBtn={"Create"}
            formArr={formArr}
        />
    );
    const productsTable = <Table thArr={thArr} trArr={trArr} displayKeys={displayKeys} />;
    return PageSplit(newProductForm, productsTable);
};

export default Products;
