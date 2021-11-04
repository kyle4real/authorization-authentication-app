import styled from "styled-components";

import { btnReset, v } from "../../../styles/variables";

export const SForm = styled.form`
    width: 100%;
    background: white;
    padding: ${v.mdSpacing};
    border-radius: ${v.borderRadius};
`;

export const SFormTitle = styled.h1`
    display: block;
    font-size: 24px;
    text-align: center;
    margin-bottom: ${v.lgSpacing};
`;

export const SFormControl = styled.div`
    width: 100%;
    :not(:last-of-type) {
        margin-bottom: ${v.smSpacing};
    }
`;

export const SLabel = styled.label`
    display: block;
    font-size: 14px;
    margin-left: 4px;
`;
export const SInput = styled.input`
    font-family: inherit;
    letter-spacing: inherit;
    padding: calc(${v.smSpacing} / 2) ${v.smSpacing};
    font-size: inherit;
    width: 100%;
    outline: none;
    border: 1px solid ${({ theme }) => theme.text};
    border-radius: ${v.borderRadius};
    :focus {
        border-color: ${({ theme }) => theme.primary};
    }
`;

export const SSubmitButton = styled.button`
    ${btnReset};
    width: 100%;
    display: block;
    text-align: center;
    background: ${({ theme }) => theme.primary};
    margin-top: ${v.mdSpacing};
    padding: ${v.smSpacing};
    cursor: pointer;
    border-radius: ${v.borderRadius};

    :active {
        transform: scale(0.95);
    }
`;
