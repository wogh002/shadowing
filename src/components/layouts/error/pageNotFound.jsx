import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import space from '../../../assets/space.png';
import { PinkBtn } from '../../../styles/formElements/style';
const Section = styled.section`
    padding: 50px;
    img {
        display: block;
        width: 100%; 
        margin: 0 auto;
        height: auto;
        margin-bottom: 25px;
        min-width : 235px;
        max-width:500px;
    }
    h1 {
        font-size: 16px;
        font-weight: 700;
        text-align: center;
        letter-spacing: -0.03em;
        white-space: nowrap;
        opacity: 0.9;
        margin-bottom : 15px;
    }
      /* --- desktop --- */
      @media ${({ theme: { desktop } }) => desktop} {
        h1 {
            font-size: 20px;
            margin-bottom : 25px;
        }
    }
`
const LoginButton = styled(PinkBtn)`
    margin:0 auto;
    font-size: 13px;
    width :80%;
    padding: 10px;
    min-width: 190px;
      /* --- desktop --- */
    @media ${({ theme: { desktop } }) => desktop} {
        font-size: 17px;
        width :30%;
    }
`
const PageNotFound = () => {
    return (
        <Section>
            <img src={space} alt="space" />
            <h1>
                Sorry can't find page ❗
            </h1>
            <Link to="/login">
                <LoginButton>Login</LoginButton>
            </Link>
        </Section>
    )
}
export default PageNotFound;