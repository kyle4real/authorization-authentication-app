import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../app/actions/user-actions";
import { userActions } from "../app/slices/user-slice";
import Account from "../components/Account/Account";
import Error from "../components/Error/Error";
import PageLoad from "../components/Loading/PageLoad";

const AccountPage = () => {
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.user);

    useEffect(() => {
        dispatch(getUser());

        return () => {
            dispatch(userActions.setError(null));
            dispatch(userActions.setLoading(true));
            dispatch(userActions.resetUser());
        };
    }, [dispatch]);

    if (loading) return <PageLoad />;
    if (error) return <Error error={error} />;

    return <Account />;
};

export default AccountPage;
