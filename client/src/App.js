import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";

import { ThemeProvider } from "styled-components";

import Layout from "./components/Layout/Layout";

import Routes from "./Routes";
import { GlobalStyles } from "./styles/globalStyles";
import { darkTheme, lightTheme } from "./styles/theme";

function App() {
    const { theme } = useSelector((state) => state.ui);
    const currentTheme = theme === "light" ? lightTheme : darkTheme;

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
                <Layout>
                    <Routes />
                </Layout>
            </>
        </ThemeProvider>
    );
}

export default App;
