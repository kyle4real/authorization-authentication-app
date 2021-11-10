import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, useHistory, useLocation } from "react-router";
import { refresh } from "../app/actions/auth-actions";
import { authActions } from "../app/slices/auth-slice";
import PageLoad from "../components/Loading/PageLoad";
import { isTokenValid } from "../utils/accessToken";

const ProtectedRoute = ({ children, ...restOfProps }) => {
    const location = useLocation();
    const history = useHistory();
    const dispatch = useDispatch();
    const { accessToken, loading } = useSelector((state) => state.auth);

    // useEffect(() => {
    //     const onSuccess = () => {};
    //     const onFailure = () => {
    //         history.push("/login");
    //     };

    //     if (!isTokenValid(accessToken)) {
    //         dispatch(refresh(onSuccess, onFailure));
    //     } else dispatch(authActions.setLoading(false));

    //     return () => dispatch(authActions.setLoading(true));
    // }, [location, dispatch, accessToken, history]);

    // if (loading) return <PageLoad />;

    return <Route {...restOfProps}>{accessToken ? children : <Redirect to="/login" />}</Route>;
};

export default ProtectedRoute;
