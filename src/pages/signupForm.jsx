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
import { CHECK_ID_RESET } from '../reducers/user';
// 첫글자는 반드시 영문소문자, 영문소문자 a-z 숫자 0 ~ 9 까지 허용/  5~15자 이하로 이루어지고, 숫자가 하나 이상 포함되어야한다.
const ID_REG = /^[a-z][a-z\d]{4,14}$/;
let clickedCheckId = undefined;
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
    const [id, setId] = useInput('');
    const [nickname, setNickname] = useInput('');
    const [password, setPassword] = useInput('');
    const [confirmPassword, setConfirmPassword] = useInput('');
    const { checkIdLoading, checkIdDone, isCheckIdPass } = useSelector(({ user }) => user);

    const onCheckId = useCallback(() => {
        clickedCheckId = id;
        ID_REG.test(id) && dispatch(checkIdRequestAction({ useId: id }));
    }, [id, dispatch]);

    //체크버튼 눌렀을때의 id와 현재의 id가 다르다면 true
    const resetId = useCallback(checkId => {
        clickedCheckId !== checkId && dispatch({ type: CHECK_ID_RESET })
    }, [dispatch]);

    useEffect(() => {
        // 중복된ID 있을 경우
        if (!isCheckIdPass && checkIdDone) {
            resetId(id);
        }
        else if (isCheckIdPass && checkIdDone) {
            resetId(id);
        }
    }, [isCheckIdPass, checkIdDone, id, resetId]);

    return (
        <>
            <Header />
            <Form>
                <h1>Sign Up</h1>
                <div>
                    <Input
                        type="text"
                        placeholder="Enter ID"
                        required
                        onChange={setId}
                        value={id}
                        maxLength="15"
                    />
                    <Span onClick={onCheckId} loading={checkIdLoading.toString()}>
                        Check
                    </Span>
                    {
                        ID_REG.test(id) && checkIdDone ?
                            <>
                                {
                                    isCheckIdPass ?
                                        <ErrorMsg color="green"> Good ID 😍</ErrorMsg>
                                        :
                                        <ErrorMsg> Duplicate. you have to use other id</ErrorMsg>
                                }
                            </>
                            :
                            <>
                                {
                                    ID_REG.test(id) ?
                                        <ErrorMsg color="green">Click Check Button 👉</ErrorMsg>
                                        :
                                        <ErrorMsg>first character have to use lowercase letter and Only 5 to 15 lower case letters and numbers are allowed</ErrorMsg>
                                }
                            </>
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