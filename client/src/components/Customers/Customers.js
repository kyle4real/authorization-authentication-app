import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCustomer } from "../../app/actions/customers-actions";

import Form from "../UI/Form/Form";
import PageSplit from "../UI/PageSplit/PageSplit";
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
const displayKeys = ["name"];

const Customers = () => {
    const dispatch = useDispatch();
    const { customers } = useSelector((state) => state.customers);

    const trArr = customers?.length ? customers : [];

    const onSubmitHandler = (form, callback) => dispatch(createCustomer(form, callback));

    const newCustomerForm = (
        <Form
            onSubmit={onSubmitHandler}
            formTitle={"Create New Customer"}
            submitBtn={"Create"}
            formArr={formArr}
        />
    );
    const customersTable = <Table thArr={thArr} trArr={trArr} displayKeys={displayKeys} />;
    return PageSplit(newCustomerForm, customersTable);
};

export default Customers;
