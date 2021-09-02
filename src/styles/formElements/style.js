import styled, { css } from 'styled-components';
import { circle } from '../loading';
import { ErrorMessage } from "../error/style";
export const Input = styled.input`
    display: block;
    padding:15px;
    font-size: 14px;
    letter-spacing: -0.02em;
    background-color: #DEDEDE;
    color : black;
    border-radius : 15px;
    opacity: 0.5;
    transition: opacity 250ms ease-in-out;
    :hover{
        opacity: 0.7;
    }
    &::placeholder {
        color: black;
    }
`;
export const PinkBtn = styled.button`
    display:block;
    font-size: 12px;
    letter-spacing: -0.02em;
    color : #FF3399;
    font-weight : 700;
    border: 1px solid #FF3399;
    border-radius: 15px;
    transition: all 250ms ease-in-out;
    :hover{
        color : white;
        background-color: #FF3399;
    }
`
export const PurpleBtn = styled.button`
    display:block;
    min-width: 187px;
    font-size: 13px;
    background-color: #8743FF;
    letter-spacing: -0.02em;
    color: white;
    font-weight: 700;
    padding: 15px;
    border-radius: 15px;
    transition: opacity 250ms ease-in-out;
    ${({ loading }) => loading === "true" && css`
    opacity: 0.5;
        ::after{
            content:"";
            display:inline-block;
            margin-left:3px;
            border :2px solid black;
            border-radius :50%;
            width : 8px;
            height : 8px;
            animation : ${circle} 1s linear forwards;
        }        
    `}
`
export const CircleBtn = styled.button`
    cursor: pointer;
    width: 20px;
    height: 20px;
    opacity: 0.8;
    border: 2px solid #8743FF;
    background-color: #e9ecef;
    border-radius: 50%;
    transition: opacity 250ms ease-in-out,
        background-color 250ms ease-in-out;
    :hover{
        opacity: 1;
        background-color: #424242;
    }
`
export const Span = styled.span`
    position: absolute;
    top: 19px;
    right: -50px;
    cursor: pointer;
    letter-spacing: -0.05em;
    color: #FF3399;
    font-weight:700;
    transition: all 250ms ease-in-out;
    ${({ loading }) => loading === "true" && css`
    opacity: 0.5;
        ::after{
            content:"";
            display:inline-block;
            margin-left:3px;
            border :2px solid black;
            border-radius :50%;
            width : 10px;
            height : 10px;
            animation : ${circle} 1s linear forwards;
        }        
    `}
    @media ${({ theme: { desktop } }) => desktop} {
        font-size: 19px;
    }
`

export const ErrorMsg = styled(ErrorMessage)`
    top:-20px;
    left:15px;
    @media ${({ theme: { desktop } }) => desktop} {
        min-width:320px;
        font-size: 14px;
    }
`