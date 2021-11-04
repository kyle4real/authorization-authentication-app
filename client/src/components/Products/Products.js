import React from "react";
import Form from "../UI/Form/Form";
import Grid from "../UI/Grid/Grid";
import List from "../UI/List/List";

const Products = () => {
    const newProductForm = (
        <Form
            formTitle={"Create New Product"}
            submitBtn={"Create"}
            formArr={[
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
                    type: "number",
                },
            ]}
        />
    );
    const productsList = <List />;
    return Grid(newProductForm, productsList);
};

export default Products;
