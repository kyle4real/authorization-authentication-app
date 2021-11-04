import React from "react";
import Form from "../UI/Form/Form";
import Grid from "../UI/Grid/Grid";
import Table from "../UI/Table/Table";

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

const thArr = ["Product Name", "Product Price"];
const trArr = [
    {
        name: "Ryzen 3",
        price: 79.99,
    },
    {
        name: "MSI Graphics Card",
        price: 79.99,
    },
    {
        name: "Samsung SSD.M2",
        price: 79.99,
    },
];

const Products = () => {
    const onSubmitHandler = (form) => {
        form = { ...form, price: Number(form.price) };
    };

    const newProductForm = (
        <Form
            onSubmit={onSubmitHandler}
            formTitle={"Create New Product"}
            submitBtn={"Create"}
            formArr={formArr}
        />
    );
    const productsTable = <Table thArr={thArr} trArr={trArr} />;
    return Grid(newProductForm, productsTable);
};

export default Products;
