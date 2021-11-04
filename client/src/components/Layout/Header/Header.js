import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { uiActions } from "../../../app/slices/uiSlice";
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

    const menuToggleHandler = () => {
        dispatch(uiActions.menuToggle());
    };
    const menuClosehandler = () => {
        if (menuOpen) dispatch(uiActions.menuClose());
    };

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
                    <SCenter>
                        <Nav />
                    </SCenter>
                    <SRight>
                        <SCTAButton onClick={() => history.push("/login")}>Log In</SCTAButton>
                        <SMenuToggleButton onClick={menuToggleHandler}>
                            {!menuOpen ? <SMenuIcon /> : <SCloseIcon />}
                        </SMenuToggleButton>
                    </SRight>
                </SHeader>
            </SHeaderFixed>
            <SMenu style={menuOpen ? { left: 0 } : {}}>
                <Nav menuToggleHandler={menuToggleHandler} />
            </SMenu>
        </>
    );
};

export default Header;
