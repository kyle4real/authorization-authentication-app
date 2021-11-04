import styled from "styled-components";

import { v, b } from "../../../styles/variables";

export const SGrid = styled.div`
    display: grid;
    gap: ${v.lgSpacing};
    @media ${b.md} {
        grid-template-columns: repeat(2, 1fr);
    }
`;

export const SGridItem = styled.div``;
