import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, useHistory, useLocation } from "react-router";
import { refresh } from "../app/actions/auth-actions";
import { authActions } from "../app/slices/auth-slice";
import { getTokenRole, isTokenValid } from "../utils/accessToken";

const InactivityMessage = () => {
    const history = useHistory();
    const [count, setCount] = useState(3);

    useEffect(() => {
        if (count > 0) return;
        history.push("/login");
    }, [count, history]);

    useEffect(() => {
        const id = setInterval(() => {
            setCount((p) => p - 1);
        }, 1000);
        return () => clearInterval(id);
    }, []);

    return (
        <>
            Your session has expired
            <br />
            Please log in again
            <br />
            {count}...
        </>
    );
};

const ProtectedRoute = ({ children, roles, ...restOfProps }) => {
    const { accessToken } = useSelector((state) => state.auth);

    const role = getTokenRole(accessToken);

    return <Route {...restOfProps}>{children}</Route>;
};

export default ProtectedRoute;
