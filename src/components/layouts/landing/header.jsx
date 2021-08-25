import React, { useCallback, useState } from "react";
import styled from 'styled-components';
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MenuItmes from "./menuItmes";
import DropDown from "./dropDown";
import logo from "../../../assets/logo.png";
import { Link } from 'react-router-dom';
const HeaderTag = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    border-bottom: 1px solid #e9ecef;
    & > ul {
        /* pc 드롭다운은 모바일에서 보이지 않게 설정*/
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
            /* 드롭다운 menuItmes.jsx*/
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
                {/* pc 일때만 보이는 menuItmes,IMAGE */}
                <img src={logo} alt="logo" />
                <MenuItmes />

                <Link to="/signup">
                    <UserInfoWrapper>
                        <button>Sign Up</button>
                    </UserInfoWrapper>
                </Link>
                
            </HeaderTag>
            {/* pc일 경우 드롭다운 보이지 않게 설정함 */}
            <DropDown open={open} setOpen={setOpen} />
        </>
    )
};
export default Header;