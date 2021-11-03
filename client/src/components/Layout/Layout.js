import React from "react";
import { SPage } from "./styles";

const Layout = ({ children }) => {
    return (
        <>
            {/* <Header /> */}
            <SPage>{children}</SPage>
        </>
    );
};

export default Layout;
