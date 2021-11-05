import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import { ThemeProvider } from "styled-components";
import { refresh } from "./app/actions/auth-actions";
import { authActions } from "./app/slices/auth-slice";

import Layout from "./components/Layout/Layout";

import Routes from "./Routes";
import { GlobalStyles } from "./styles/globalStyles";
import { darkTheme, lightTheme } from "./styles/theme";
import { isTokenValid } from "./utils/accessToken";

function App() {
    const history = useHistory();
    const dispatch = useDispatch();
    const { accessToken, loading } = useSelector((state) => state.auth);
    const { theme } = useSelector((state) => state.ui);
    const currentTheme = theme === "light" ? lightTheme : darkTheme;

    useEffect(() => {
        const onSuccess = () => {};
        const onFailure = () => {
            dispatch(authActions.resetAccessToken());
        };

        dispatch(refresh(onSuccess, onFailure));

        return () => dispatch(authActions.setLoading(true));
    }, [dispatch]);

    return (
        <ThemeProvider theme={currentTheme}>
            <GlobalStyles />
            <Helmet>
                <title>Authentication</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap"
                    rel="stylesheet"
                />
            </Helmet>
            <>
                <Layout>{!loading && <Routes />}</Layout>
            </>
        </ThemeProvider>
    );
}

export default App;
