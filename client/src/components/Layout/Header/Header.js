import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { uiActions } from "../../../app/slices/ui-slice";
import { isTokenValid } from "../../../utils/accessToken";
import Nav from "./Nav/Nav";
import {
    SCenter,
    SCloseIcon,
    SCTAButton,
    SHeader,
    SHeaderFixed,
    SHeaderHeight,
    SLeft,
    SLogo,
    SLogoLink,
    SMenu,
    SMenuIcon,
    SMenuToggleButton,
    SRight,
} from "./styles";

const Header = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { menuOpen } = useSelector((state) => state.ui);
    const { loading, accessToken } = useSelector((state) => state.auth);

    const menuToggleHandler = () => {
        dispatch(uiActions.menuToggle());
    };
    const menuClosehandler = () => {
        if (menuOpen) dispatch(uiActions.menuClose());
    };

    const valid = isTokenValid(accessToken);
    const ctaBtnText = !valid ? "Log In" : "Account";
    const ctaBtnLink = !valid ? "/login" : "/account";

    return (
        <>
            <SHeaderHeight />
            <SHeaderFixed>
                <SHeader>
                    <SLeft>
                        <SLogoLink to="/" onClick={menuClosehandler}>
                            <SLogo />
                        </SLogoLink>
                    </SLeft>
                    <SCenter>{!loading && valid && <Nav />}</SCenter>
                    <SRight>
                        {!loading && (
                            <SCTAButton onClick={() => history.push(ctaBtnLink)}>
                                {ctaBtnText}
                            </SCTAButton>
                        )}
                        <SMenuToggleButton onClick={menuToggleHandler}>
                            {!menuOpen ? <SMenuIcon /> : <SCloseIcon />}
                        </SMenuToggleButton>
                    </SRight>
                </SHeader>
            </SHeaderFixed>
            <SMenu style={menuOpen ? { left: 0 } : {}}>
                {!loading && valid && <Nav menuToggleHandler={menuToggleHandler} />}
            </SMenu>
        </>
    );
};

export default Header;
