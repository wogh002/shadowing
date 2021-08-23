import React from 'react';
import styled from 'styled-components';
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Items = styled.ul`
    padding: 17px;
    & li {
        opacity: 0.6;
        text-align:left;    
        font-size: 18px;
        margin-bottom: 30px;
        cursor: pointer;
        white-space: nowrap;
        transition: opacity 250ms ease-in-out;
        :hover{
            opacity: 1;
        }
    }
    & li span {
        margin-left: 7px;
    }
       /* --- desktop --- */
    @media ${({ theme: { desktop } }) => desktop} {
        &{
            /* flex 상태 */
            padding: 0;
        }
        & li{
            padding: 31px 20px;
            margin-bottom: 0;
            position:relative;
            :hover::after{
                content : "";
                top: 80px;
                left:32px;
                width:60%;
                height:2px;
                background-color: #0066ff;
                position: absolute;
            }
        }
    }
`;
const MenuItmes = () => {
    return (
        <Items>
            <li>
                <FontAwesomeIcon icon={faRocket} />
                <span>Menu</span>
            </li>
            <li>
                <FontAwesomeIcon icon={faRocket} />
                <span>Menu</span>
            </li>
            <li>
                <FontAwesomeIcon icon={faRocket} />
                <span>Menu</span>
            </li>
        </Items>
    )
}

export default MenuItmes;