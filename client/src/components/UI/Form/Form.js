import React, { useEffect, useState } from "react";
import { SForm, SFormControl, SFormTitle, SInput, SLabel, SSubmitButton } from "./styles";

const initialFormInput = (formArr) => {
    return formArr.reduce((r, v) => {
        let { name, initialValue } = v;
        return { ...r, [name]: initialValue || "" };
    }, {});
};

const Form = ({ formArr, submitBtn, formTitle, onSubmit }) => {
    const [formInput, setFormInput] = useState(initialFormInput(formArr));

    const onChangeHandler = (e) => {
        setFormInput((p) => ({ ...p, [e.target.name]: e.target.value }));
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (onSubmit) onSubmit(formInput);
    };

    return (
        <SForm autoComplete="off">
            <SFormTitle>{formTitle}</SFormTitle>
            {formArr.map(({ label, name, type }, index) => {
                const value = formInput[name];
                return (
                    <SFormControl key={index}>
                        <SLabel htmlFor={name}>{label}</SLabel>
                        <SInput
                            type={type}
                            name={name}
                            id={name}
                            value={value}
                            onChange={onChangeHandler}
                        />
                    </SFormControl>
                );
            })}
            <SSubmitButton onClick={onSubmitHandler}>{submitBtn}</SSubmitButton>
        </SForm>
    );
};

Form.defaultProps = {};

export default Form;
