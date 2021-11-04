import React from "react";
import { useDispatch } from "react-redux";

import Form from "../UI/Form/Form";
import { SFixedContainer, SFlexContainer } from "../UI/Containers/styles";
import { SLink, SOptions } from "./styles";
import { login } from "../../app/actions/auth-actions";
import { useHistory } from "react-router";

const formArr = [
    {
        label: "Email",
        name: "email",
        initialValue: "",
        type: "text",
    },
    {
        label: "Password",
        name: "password",
        initialValue: "",
        type: "password",
    },
];

const Login = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const onSubmitHandler = (form) => {
        dispatch(
            login(form, () => {
                history.push("/");
            })
        );
    };

    return (
        <SFlexContainer>
            <SFixedContainer maxWidth={275}>
                <Form
                    onSubmit={onSubmitHandler}
                    formTitle={"Login"}
                    submitBtn={"Register"}
                    formArr={formArr}
                />
                <SOptions>
                    Don't have an account?&nbsp;
                    <SLink to={"/register"}>Create One</SLink>
                </SOptions>
            </SFixedContainer>
        </SFlexContainer>
    );
};

export default Login;
