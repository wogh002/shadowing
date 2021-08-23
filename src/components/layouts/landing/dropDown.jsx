import React from 'react';
import styled, { css } from 'styled-components';
import MenuItmes from "./menuItmes";
const DropDownWrapper = styled.div`
    position: relative;
    opacity: 0;
    z-index:-1;
    ${({ open }) => open && css`
        opacity: 1;
        height: 27vh;
        z-index:1;
    `}
    & div {
        border: 1px solid #e9ecef;
        position: absolute;
        top: -3%;
        left:3%;
        min-width: 123px;
        width: 38%;
        height: 1px;
        transition: height 250ms ease-in-out;
        border-radius: 10px;
        box-shadow: 1px 3px 14px 0px rgba(0,0,0,0.69);
        ${({ open }) => open && css`
            height: 27vh;
        `}
    }
    @media ${({ theme: { desktop } }) => desktop} {
        display:none;
    }
`
const DropDown = ({ open }) => {
    return (
        <DropDownWrapper open={open}>
            <div open={open}>
                <MenuItmes />
            </div>
        </DropDownWrapper>
    )
}
export default DropDown;