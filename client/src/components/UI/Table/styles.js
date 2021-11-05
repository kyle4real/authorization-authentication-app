import styled from "styled-components";

import { v } from "../../../styles/variables";

export const STableContainer = styled.div`
    background: ${({ theme }) => theme.bg};
    border-radius: ${v.borderRadius};
    padding: ${v.mdSpacing};
`;

export const STable = styled.table`
    width: 100%;
    border-collapse: collapse;
    text-align: center;
`;

export const STHead = styled.thead``;

export const STHeadTR = styled.tr`
    background: ${({ theme }) => theme.primary};
`;

export const STH = styled.th`
    border: 1px solid ${({ theme }) => theme.text};
    font-weight: 400;
    padding: calc(${v.smSpacing} / 2) ${v.smSpacing};
    font-size: 14px;
`;

export const STBody = styled.tbody``;

export const STBodyTR = styled.tr`
    background: ${({ theme }) => theme.bg};
`;

export const STD = styled.td`
    border: 1px solid ${({ theme }) => theme.text};
    padding: ${v.smSpacing};
`;

export const STDNoPadding = styled.td`
    border: 1px solid ${({ theme }) => theme.text};
    padding: 0;
`;
