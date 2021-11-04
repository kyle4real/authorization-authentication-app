import React from "react";
import Form from "../UI/Form/Form";
import { SFormContainer, SLogin } from "./styles";

const Login = () => {
    const onSubmitHandler = (form) => {
        console.log(form);
    };

    return (
        <SLogin>
            <SFormContainer>
                <Form
                    onSubmit={onSubmitHandler}
                    formTitle={"Login Form"}
                    submitBtn={"Log In"}
                    formArr={[
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
                    ]}
                />
            </SFormContainer>
        </SLogin>
    );
};

export default Login;
