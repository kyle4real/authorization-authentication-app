import styled from "styled-components";

import { btnReset, v } from "../../styles/variables";

export const SAccountName = styled.span`
    display: block;
    font-weight: 500;
    margin-bottom: ${v.smSpacing};
    text-align: center;
`;

export const SAccountEmail = styled.span`
    display: block;
    text-align: center;
`;

export const SLogoutButton = styled.button`
    ${btnReset};
    width: 100%;
    display: block;
    text-align: center;
    font-size: 14px;
    background: ${({ theme }) => theme.primary};
    margin-top: ${v.mdSpacing};
    padding: ${v.smSpacing};
    cursor: pointer;
    border-radius: ${v.borderRadius};

    :active {
        transform: scale(0.95);
    }
`;
