import styled from 'styled-components';
export const MainTag = styled.main`    
    padding:40px;
    border-bottom: 1px solid #e9ecef;
    & h1 {
        font-size : 25px;
        font-weight:700;
        cursor: pointer;
        margin-bottom: 45px;
        letter-spacing: -0.05em;
    }
    & img {
        display:block;
        width:100%;
        height : auto;
        min-width : 230px;
        padding : 0;
        margin : 0 auto;
        margin-bottom: 30px;
        max-width : 430px;
    }
    & h2 {
        font-weight: 700;
        font-size : 21px;
        text-align:center;
        margin-bottom: 25px;
        letter-spacing: -0.02em;
        min-width:210px;
    }
    & p {
        text-align:center;
        font-size : 13px;
        opacity: 0.6;
        margin-bottom: 22px;
        line-height: 1.7;
        letter-spacing: -0.02em;
        min-width:193px;
    }
    & button {
        display:block;
        letter-spacing: -0.02em;
        width : 70%;
        max-width : 220px;
        min-width: 140px;
        margin: 0 auto;
        color : #FF3399;
        font-weight : 700;
        margin-bottom : 20px;
        border: 1px solid #FF3399;
        border-radius: 15px;
        padding:7px 0 8px 0;
        transition: all 250ms ease-in-out;
        :hover{
            color : white;
            background-color: #FF3399;
        }
    }
     /* --- desktop --- */
    @media ${({ theme: { desktop } }) => desktop} {
        padding:70px 210px;
        & h1 {
            font-size : 30px;
        }
        & img {
            max-width : 460px;
        }
        & h2 {
            font-size : 26px;
        }
        & p {
            font-size : 16px;
        }
    }
`