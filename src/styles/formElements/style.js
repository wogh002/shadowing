import styled from 'styled-components';
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
    :hover{
       opacity: 0.9;
    }
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