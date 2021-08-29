import styled, { css } from 'styled-components';
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
    opacity: 0.8;
    color: #FF3399;
    font-weight:700;
    transition: all 250ms ease-in-out;
    :hover{
        opacity: 1;
    }
    ${({ loading }) => loading === "true" && css`
        color:black;
    `}
    @media ${({ theme: { desktop } }) => desktop} {
        font-size: 19px;
    }
`
