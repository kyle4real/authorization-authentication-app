import React, { useEffect, useState } from "react";
import { SForm, SFormControl, SFormTitle, SInput, SLabel, SSubmitButton } from "./styles";

const initialFormInput = (formArr) => {
    return formArr.reduce((r, v) => ({ ...r, [v.name]: v.initialValue || "" }), {});
};

const Form = ({ formArr, submitBtn, formTitle, onSubmit }) => {
    const [formInput, setFormInput] = useState(initialFormInput(formArr));

    const onChangeHandler = (e, changeParse) => {
        let value = e.target.value;
        if (changeParse) {
            value = changeParse(value);
            if (value === null) return;
        }
        setFormInput((p) => ({ ...p, [e.target.name]: value }));
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (onSubmit) onSubmit(formInput);
    };

    return (
        <SForm autoComplete="off">
            <SFormTitle>{formTitle}</SFormTitle>
            {formArr.map(({ label, name, type, valueParse, changeParse }, index) => {
                let value = formInput[name];
                if (valueParse) value = valueParse(value);
                return (
                    <SFormControl key={index}>
                        <SLabel htmlFor={name}>{label}</SLabel>
                        <SInput
                            type={type}
                            name={name}
                            id={name}
                            value={value}
                            onChange={(e) => onChangeHandler(e, changeParse)}
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
