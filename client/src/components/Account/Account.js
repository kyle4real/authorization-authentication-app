import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../app/actions/auth-actions";
import Card from "../UI/Card/Card";
import { SFixedContainer, SFlexContainer } from "../UI/Containers/styles";
import { SAccountEmail, SAccountName, SLogoutButton } from "./styles";

const Account = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.user);

    const logoutHandler = () => {
        dispatch(logout());
    };

    return (
        <SFlexContainer>
            <SFixedContainer maxWidth={275}>
                <Card>
                    <SAccountName>{user?.name}</SAccountName>
                    <SAccountEmail>{user?.email}</SAccountEmail>
                    <SLogoutButton onClick={logoutHandler}>Log Out</SLogoutButton>
                </Card>
            </SFixedContainer>
        </SFlexContainer>
    );
};

export default Account;
