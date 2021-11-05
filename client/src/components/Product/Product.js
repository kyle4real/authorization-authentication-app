import React from "react";
import { useSelector } from "react-redux";
import Card from "../UI/Card/Card";
import { SFixedContainer, SFlexContainer } from "../UI/Containers/styles";
import { SProductName, SProductPrice } from "./styles";

const Product = () => {
    const { product } = useSelector((state) => state.product);

    return (
        <SFlexContainer>
            <SFixedContainer maxWidth={275}>
                <Card>
                    <SProductName>{product?.name}</SProductName>
                    <SProductPrice>${product?.price}</SProductPrice>
                </Card>
            </SFixedContainer>
        </SFlexContainer>
    );
};

export default Product;
