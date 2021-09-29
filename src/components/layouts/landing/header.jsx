import React, { useCallback, useState } from "react";
import { HeaderTag, UserInfoWrapper } from "../../../styles/landing/header";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MenuItmes from "./menuItmes";
import DropDown from "./dropDown";
import logo from "../../../assets/logo.png";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { LOGOUT_REQUEST } from "../../../reducers/user";
const Header = () => {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const onShowDropDown = useCallback(() => setOpen(!open), [open]);
    const { me } = useSelector(({ user }) => user);
    const onLogOut = useCallback(() => {
        dispatch({ type: LOGOUT_REQUEST });
    }, [dispatch]);
    return (
        <>
            <HeaderTag open={open}>
                <button onClick={onShowDropDown}>
                    {
                        open ?
                            <FontAwesomeIcon icon={faCaretUp} size="lg" />
                            :
                            <FontAwesomeIcon icon={faCaretDown} size="lg" />
                    }
                </button>
                {/* pc 일때만 보이는 menuItmes,a */}
                <Link to="/">
                    <img src={logo} alt="logo" />
                </Link>
                <MenuItmes />
                <UserInfoWrapper>
                    {
                        me ?
                            <Link to="/" onClick={onLogOut}>
                                <button>
                                    Logout
                                </button>
                            </Link>
                            :
                            <Link to="/signup">
                                <button>
                                    Sign Up
                                </button>
                            </Link>
                    }
                </UserInfoWrapper>
            </HeaderTag>
            {/* pc일 경우 드롭다운 보이지 않게 설정함 */}
            <DropDown open={open} setOpen={setOpen} />
        </>
    )
};
export default Header;