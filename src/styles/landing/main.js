import styled from 'styled-components';
export const MainTag = styled.main`
    padding:40px;
    border-bottom: 1px solid #e9ecef;
    div {
        display: flex;
        min-width:215px;
        align-items: center;
        justify-content: space-around;
        margin-bottom: 45px;
    }
    div h1 {
        font-size : 20px;
        font-weight:700;
        cursor: pointer;
        letter-spacing: -0.05em;
        color : black;
        min-width: 180px;
        opacity: 0.8;
        transition: opacity 250ms ease-in-out;
        :hover{
            opacity: 1;
        }
    }
    div span {
        font-size : 20px;
        font-weight:700;
        color:black;
        opacity: 0.8;
        transition: opacity 250ms ease-in-out;
        :hover{
            opacity: 1;
        }
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
        font-size: 15px;
        letter-spacing: -0.02em;
        width : 60%;
        min-width: 180px;
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
        div h1 {
            font-size : 25px;
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
        & button {
            font-size: 20px;
            letter-spacing: -0.03em;
            width : 60%;
        }
    }
`