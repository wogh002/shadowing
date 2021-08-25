import React from 'react';
import Header from '../components/layouts/landing/header';
import Footer from '../components/layouts/landing/footer';
import styled from 'styled-components';
import { Input, PurpleBtn, CircleBtn } from "../styles/formElements/style";
const Form = styled.form`
    padding: 50px;
    border-bottom: 1px solid #e9ecef;
        div {
            position: relative;
            margin: 0 auto;
        }
        div span {
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
        div span {
            font-size: 19px;
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
const SignupForm = () => {
    return (
        <>
            <Header />
            <Form>
                <h1>Sign Up</h1>
                <div>
                    <Input type="text" placeholder="Enter ID" required />
                    <span>CHECK✔</span>
                </div>
                <Input type="password" placeholder="Enter Password" required />
                <Input type="password" placeholder="Confirm Password" required />
                <PurpleBtn type="submit">Submit</PurpleBtn>
            </Form>
            <Footer />
        </>
    );
};

export default SignupForm;