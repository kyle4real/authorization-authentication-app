import styled from "styled-components";

import { v, b } from "../../../../styles/variables";

import { Link } from "react-router-dom";

export const SNav = styled.nav`
    width: auto;
    padding: ${v.mdSpacing};
    background: ${({ theme }) => theme.bg};
    border-radius: ${v.borderRadius};
    @media ${b.md} {
        background: none;
        padding: 0;
        height: 100%;
        display: flex;
    }
`;
export const SNavLinkContainer = styled.div`
    user-select: none;
    position: relative;
    width: 100%;
    justify-content: space-between;
    :not(:last-of-type) {
        margin-bottom: ${v.mdSpacing};
    }
    @media ${b.md} {
        display: flex;
        align-items: center;
        :not(:last-of-type) {
            margin-bottom: 0;
            margin-right: ${v.mdSpacing};
        }
    }
`;
export const SNavLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    :hover {
        color: ${({ theme }) => theme.primary};
    }
`;
