import React from "react";
import Form from "../UI/Form/Form";
import Grid from "../UI/Grid/Grid";
import Table from "../UI/Table/Table";

function numberWithCommas(x) {
    return x?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Products = () => {
    const onSubmitHandler = (form) => {
        form = { ...form, price: Number(form.price) };
    };

    const newProductForm = (
        <Form
            onSubmit={onSubmitHandler}
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
                    type: "text",
                    valueParse: (value) => {
                        return `$${numberWithCommas(value) || ""}`;
                    },
                    changeParse: (value) => {
                        value = value.slice(1).split(",").join("");
                        if (value === "") return "";
                        if (isNaN(value)) return null;
                        if (value.includes(".") && value.slice(value.indexOf(".") + 1).length > 2)
                            return null;
                        return value;
                    },
                },
            ]}
        />
    );
    const productsList = <Table />;
    return Grid(newProductForm, productsList);
};

export default Products;
