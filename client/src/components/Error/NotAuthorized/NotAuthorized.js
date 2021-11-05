import React from "react";
import Card from "../../UI/Card/Card";
import { SFixedContainer, SFlexContainer } from "../../UI/Containers/styles";
import { SNotAuthenticated } from "./styles";

const NotAuthorized = ({ children }) => {
    return (
        <SFlexContainer>
            <SFixedContainer maxWidth={275}>
                <Card>
                    <SNotAuthenticated>{children}</SNotAuthenticated>
                </Card>
            </SFixedContainer>
        </SFlexContainer>
    );
};

export default NotAuthorized;
