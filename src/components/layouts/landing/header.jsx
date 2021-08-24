import React, { useCallback, useState } from "react";
import styled, { css } from 'styled-components';
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MenuItmes from "./menuItmes";
import DropDown from "./dropDown";
import logo from "../../../assets/logo.png";
const HeaderTag = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    border-bottom: 1px solid #e9ecef;
    & > ul {
        display:none;
    }
    & > img {
        display:none;
    }
    /* --- desktop --- */
    @media ${({ theme: { desktop } }) => desktop} {
        border-bottom: 1px solid #e9ecef;
        justify-content: space-around;
        padding: 0;
        & > img {
            display: block;
            cursor:pointer;
        }
        & > button {
            display:none;
        }
        & > ul {
            display:flex;
        }
    }
`

const UserInfoWrapper = styled.div`
    & button {
        font-size : 18px;
    }
`
const Header = () => {
    const [open, setOpen] = useState(false);
    const onShowDropDown = useCallback(() => setOpen(!open), [open]);
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
                
                <img src={logo} alt="logo" />
                <MenuItmes />
                <UserInfoWrapper>
                    <button>Sign Up</button>
                </UserInfoWrapper>
            </HeaderTag>
            <DropDown open={open} />
        </>
    )
};
export default Header;