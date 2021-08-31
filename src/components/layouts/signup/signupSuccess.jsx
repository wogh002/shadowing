import React from 'react';
import space from '../../../assets/space.png';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { PinkBtn } from '../../../styles/formElements/style';
const SignupSuccessSection = styled.section`
    padding: 60px 50px 38px 50px;
    border-bottom: 1px solid #e9ecef;
    h1 {
        font-size: 16px;
        font-weight: 700;
        text-align: center;
        letter-spacing: -0.03em;
        white-space: nowrap;
        opacity: 0.9;
        margin-bottom : 15px;
    }
    img{
        display: block;
        margin:0 auto;
        width: 100%;
        height: auto;
        margin-bottom: 25px;
        min-width : 235px;
    }
    p{
        font-size: 15px;
        text-align: center;
        letter-spacing: -0.03em;
        margin-bottom: 30px;
        opacity: 0.8;
        white-space: nowrap;
    }
`
const LoginButton = styled(PinkBtn)`
    margin:0 auto;
    font-size: 13px;
    width :90%;
    padding: 10px;
    min-width: 190px;
`
const SignupSuccess = () => {
    return (
        <SignupSuccessSection>
            <h1>Your signup were SUCCESS 🎉</h1>
            <img src={space} alt="space" />
            <p>Now you can enjoy shadowing</p>
            <Link to="/login">
                <LoginButton>Login</LoginButton>
            </Link>
        </SignupSuccessSection>
    )
}

export default SignupSuccess;