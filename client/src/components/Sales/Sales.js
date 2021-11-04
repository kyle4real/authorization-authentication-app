import React from "react";
import Table from "../UI/Table/Table";

const thArr = ["Product", "Price", "Customer"];
const trArr = [
    {
        product: "Ryzen 3",
        price: 50,
        customer: "Philip",
    },
    {
        product: "Ryzen 3",
        price: 50,
        customer: "Jason",
    },
    {
        product: "Samsung SSD.M2",
        price: 50,
        customer: "John",
    },
];

const Sales = () => {
    const salesTable = <Table thArr={thArr} trArr={trArr} />;
    return salesTable;
};

export default Sales;
