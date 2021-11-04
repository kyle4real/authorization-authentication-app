import React from "react";
import Form from "../UI/Form/Form";
import Grid from "../UI/Grid/Grid";
import Table from "../UI/Table/Table";

const formArr = [
    {
        label: "Customer Name",
        name: "name",
        initialValue: "",
        type: "text",
    },
];
const thArr = ["Customer Name"];
const trArr = [
    {
        name: "Philip",
    },
    {
        name: "John",
    },
    {
        name: "Jason",
    },
];

const Customers = () => {
    const onSubmitHandler = (form) => {
        console.log(form);
    };

    const newCustomerForm = (
        <Form
            onSubmit={onSubmitHandler}
            formTitle={"Create New Customer"}
            submitBtn={"Create"}
            formArr={formArr}
        />
    );
    const customersTable = <Table thArr={thArr} trArr={trArr} />;
    return Grid(newCustomerForm, customersTable);
};

export default Customers;
