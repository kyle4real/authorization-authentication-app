import styled from "styled-components";

import { v } from "../../styles/variables";

export const SPageLoad = styled.div`
    width: 100%;
    height: 50vh;
    background: ${({ theme }) => theme.primary};
`;

export const SElementLoad = styled.div`
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.bg2};
`;
