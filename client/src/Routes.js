import React from "react";
import { Route, Switch } from "react-router";
import LoginPage from "./pages/LoginPage";

import CustomersPage from "./pages/CustomersPage";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import SalesPage from "./pages/SalesPage";
import RegisterPage from "./pages/RegisterPage";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <HomePage />
            </Route>
            {/* AUTH */}
            <Route exact path="/login">
                <LoginPage />
            </Route>
            <Route exact path="/register">
                <RegisterPage />
            </Route>
            {/* MAIN NAV */}
            <Route exact path="/products">
                <ProductsPage />
            </Route>
            <Route exact path="/customers">
                <CustomersPage />
            </Route>
            <Route exact path="/sales">
                <SalesPage />
            </Route>
        </Switch>
    );
};

export default Routes;
