import styled from "styled-components";

import { v } from "../../styles/variables";

import { Link } from "react-router-dom";

export const SOptions = styled.span`
    text-align: center;
    font-size: 14px;
    display: block;
    margin-top: ${v.smSpacing};
    padding: ${v.smSpacing} 0;
    background: ${({ theme }) => theme.bg};
    border-radius: ${v.borderRadius};
`;
export const SLink = styled(Link)`
    color: ${({ theme }) => theme.primary};
`;
