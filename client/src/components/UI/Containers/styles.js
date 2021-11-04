import styled from "styled-components";

// import { v } from "../../../styles/variables";

export const SFlexContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SFixedContainer = styled.div`
    width: 100%;
    max-width: ${({ maxWidth }) => (!maxWidth ? "initial" : `${maxWidth}px`)};
`;
