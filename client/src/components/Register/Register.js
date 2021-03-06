import React from "react";

import Form from "../UI/Form/Form";
import { SFixedContainer, SFlexContainer } from "../UI/Containers/styles";
import { SLink, SOptions } from "./styles";
import { useDispatch } from "react-redux";
import { register } from "../../app/actions/auth-actions";
import { useHistory } from "react-router";

const formArr = [
    {
        label: "Name",
        name: "name",
        initialValue: "",
        type: "text",
    },
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

const Register = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const onSubmitHandler = (form) => {
        dispatch(
            register(form, () => {
                history.push("/");
            })
        );
    };

    return (
        <SFlexContainer>
            <SFixedContainer maxWidth={275}>
                <Form
                    onSubmit={onSubmitHandler}
                    formTitle={"Register Form"}
                    submitBtn={"Register"}
                    formArr={formArr}
                />
                <SOptions>
                    Already have an account?&nbsp;
                    <SLink to={"/login"}>Log In</SLink>
                </SOptions>
            </SFixedContainer>
        </SFlexContainer>
    );
};

export default Register;
