import React, { useState, useCallback } from 'react';
import Header from '../components/layouts/landing/header';
import Footer from '../components/layouts/landing/footer';
import { Input, PurpleBtn } from "../styles/formElements/style";
import { Form, Span } from "../styles/forms/signupForm";
import { ErrorMessage } from "../styles/error/style";
import { useDispatch, useSelector } from 'react-redux';
import { checkIdRequestAction } from '../reducers/user';
import styled from 'styled-components';
import useInput from '../hooks/useInput';
import { useEffect } from 'react';
// 첫글자는 반드시 영문소문자, 영문소문자 a-z 숫자 0 ~ 9 까지 허용/  5~15자 이하로 이루어지고, 숫자가 하나 이상 포함되어야한다.
const ID_REG = /^[a-z][a-z\d]{4,14}$/;
const ErrorMsg = styled(ErrorMessage)`
    top:-20px;
    left:15px;
    @media ${({ theme: { desktop } }) => desktop} {
        min-width:320px;
        font-size: 14px;
    }
`
const SignupForm = () => {
    const dispatch = useDispatch();
    const [id, idHandler, setId] = useInput('');
    const [nickname, setNickname] = useInput('');
    const [password, setPassword] = useInput('');
    const [confirmPassword, setConfirmPassword] = useInput('');
    const { checkIdLoading, checkIdDone, isCheckIdPass } = useSelector(({ user }) => user);
    const onCheckId = useCallback(() => {
        ID_REG.test(id) && dispatch(checkIdRequestAction({ useId: id }));
    }, [id, dispatch]);
    return (
        <>
            <Header />
            <Form>
                <h1>Sign Up</h1>
                <div>
                    <Input type="text" placeholder="Enter ID" required onChange={idHandler} value={id} maxLength="15" />
                    <Span onClick={onCheckId}>
                        Check
                    </Span>
                    {
                        ID_REG.test(id) ? checkIdDone &&
                            <ErrorMsg >
                                {
                                    isCheckIdPass ? "Good ID!" : "Duplicate. you have to use other id"
                                }
                            </ErrorMsg>
                            :
                            <ErrorMsg color="green">
                                The first letter is lowercase,Only 5 to 15 lower case letters and numbers are allowed
                            </ErrorMsg>
                    }
                </div>
                <Input type="text" placeholder="Enter NickName" required onChange={setNickname} maxLength="15" />
                <Input type="password" placeholder="Enter Password" required onChange={setPassword} maxLength="15" />
                <Input type="password" placeholder="Confirm Password" required onChange={setConfirmPassword} maxLength="15" />
                <PurpleBtn type="submit">Submit</PurpleBtn>
            </Form>
            <Footer />
        </>
    );
};

export default SignupForm;