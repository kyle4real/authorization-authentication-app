import React from "react";
import { SNav, SNavLink, SNavLinkContainer } from "./styles";

const Nav = ({ navLinks, menuToggleHandler }) => {
    const onSelect = () => {
        if (menuToggleHandler) menuToggleHandler();
    };

    return (
        <SNav>
            {navLinks.map(({ label, link, tree }, index) => {
                return (
                    <SNavLinkContainer key={index}>
                        {link && (
                            <SNavLink to={link} onClick={onSelect}>
                                {label}
                            </SNavLink>
                        )}
                    </SNavLinkContainer>
                );
            })}
        </SNav>
    );
};

Nav.defaultProps = {
    navLinks: [
        {
            label: "Products",
            link: "/products",
        },
        {
            label: "Customers",
            link: "/customers",
        },
        {
            label: "Sales",
            link: "/sales",
        },
    ],
};

export default Nav;
