import React from "react";
import { Redirect, Route, Router, Switch } from "react-router";
import LoginPage from "./pages/LoginPage";

import CustomersPage from "./pages/CustomersPage";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import SalesPage from "./pages/SalesPage";
import RegisterPage from "./pages/RegisterPage";
import ProductPage from "./pages/ProductPage";
import ProtectedRoute from "./routes/ProtectedRoute";
import { useSelector } from "react-redux";
import { isTokenValid } from "./utils/accessToken";
import AccountPage from "./pages/AccountPage";

const Routes = () => {
    const { accessToken } = useSelector((state) => state.auth);

    const valid = isTokenValid(accessToken);

    return (
        <Switch>
            <Route exact path="/">
                <HomePage />
            </Route>
            {/* AUTH */}
            <Route exact path="/login">
                {!valid ? <LoginPage /> : <Redirect to="/" />}
            </Route>
            <Route exact path="/register">
                <RegisterPage />
            </Route>
            {!valid && (
                <Route path="*">
                    <Redirect to="/" />
                </Route>
            )}
            {valid && (
                <>
                    {/* ACCOUNT */}
                    <Route exact path="/account">
                        <AccountPage />
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
                    {/* PRODUCT ROUTES */}
                    <Route exact path="/products/:productId">
                        <ProductPage />
                    </Route>
                </>
            )}
        </Switch>
    );
};

export default Routes;
