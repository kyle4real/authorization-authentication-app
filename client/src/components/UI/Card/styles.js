import styled from "styled-components";

import { v } from "../../../styles/variables";

export const SCard = styled.div`
    width: 100%;
    background: ${({ theme }) => theme.bg};
    padding: ${v.mdSpacing};
    border-radius: ${v.borderRadius};
`;
