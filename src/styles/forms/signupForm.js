import styled, { css } from 'styled-components';
import { circle } from '../loading';
import { ErrorMessage } from "../error/style";
export const Form = styled.form`
    padding: 50px;
    border-bottom: 1px solid #e9ecef;
        div {
            position: relative;
            margin: 0 auto;
        }
        h1 { 
            white-space: nowrap;
            font-weight: 700;
            margin-bottom: 40px;
            text-align : center;
            font-size : 23px;
            letter-spacing: -0.02em;
        }
        input {
            min-width: 187px;
            width: 100%;
            margin-bottom: 15px;
        }
        button:last-child{
            width:100%;
        }
       
    /* --- desktop --- */
    @media ${({ theme: { desktop } }) => desktop} {
        padding: 100px;
        div {
            width: 50%;
        }
        div input{
            width: 100%;
        }
        h1 { 
            margin-bottom: 50px;
            font-size : 27px;
            letter-spacing: -0.03em;
        }
        input {
            margin:0 auto;
            font-size:17px;
            width: 50%;
            margin-bottom: 25px;
        }
        button:last-child{
            width:50%;
            font-size: 16px;
            margin:0 auto;
        }
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