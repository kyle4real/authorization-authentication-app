import React from "react";
import { Fragment } from "react";
import { STable, STableContainer, STBody, STBodyTR, STD, STH, STHead, STHeadTR } from "./styles";

const Table = ({ thArr, trArr }) => {
    return (
        <STableContainer>
            <STable>
                <STHead>
                    <STHeadTR>
                        <STH>#</STH>
                        {thArr.map((item, index) => {
                            return (
                                <Fragment key={index}>
                                    <STH>{item}</STH>
                                </Fragment>
                            );
                        })}
                    </STHeadTR>
                </STHead>
                <STBody>
                    {trArr.map(({ name, price }, index) => {
                        return (
                            <Fragment key={index}>
                                <STBodyTR>
                                    <STD style={{ width: "0%", whiteSpace: "nowrap" }}>
                                        {index + 1}
                                    </STD>
                                    <STD>{name}</STD>
                                    <STD>{price}</STD>
                                </STBodyTR>
                            </Fragment>
                        );
                    })}
                </STBody>
            </STable>
        </STableContainer>
    );
};

Table.defaultProps = {
    thArr: ["Product Name", "Product Price"],
    trArr: [
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
    ],
};

export default Table;
