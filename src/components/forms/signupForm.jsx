import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useInput from '../../hooks/useInput';
import { checkIdRequestAction, SIGN_UP_REQUEST, CHECK_ID_RESET } from '../../reducers/user';
import { Input, PurpleBtn, Span, ErrorMsg } from '../../styles/formElements/style';
import { Form } from "../../styles/forms/signupform";
import SignupSuccess from '../layouts/signup/signupsuccess';
// 첫글자는 반드시 영문소문자, 영문소문자 a-z 숫자 0 ~ 9 까지 허용/  5~15자 이하로 이루어지고, 숫자가 하나 이상 포함되어야한다.
const ID_REG = /^[a-z][a-z\d]{4,14}$/;
let clickedCheckId = undefined;
const SignupForm = () => {
    const [id, setId] = useInput('');
    const [nickname, setNickname] = useInput('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [checkPasswordError, setCheckPasswordError] = useState(false);
    const { checkIdLoading, checkIdDone, isCheckIdPass, checkIdError, signUpLoading, signUpDone, signUpError } = useSelector(({ user }) => user);
    const dispatch = useDispatch();
    const onCheckId = useCallback(() => {
        clickedCheckId = id;
        ID_REG.test(id) && dispatch(checkIdRequestAction({ userId: id }));
    }, [id, dispatch]);
    const resetId = useCallback(currentId => clickedCheckId !== currentId && dispatch({ type: CHECK_ID_RESET }), [dispatch]);
    const onChangePassword = useCallback(({ target }) => setPassword(target.value), []);
    const onChangeConfirmPassword = useCallback(({ target }) => setConfirmPassword(target.value), []);
    useEffect(() => {
        // 패스워드 달라질경우
        if (confirmPassword !== password) {
            setCheckPasswordError(true);
        }
        else {
            setCheckPasswordError(false);
        }
    }, [password, confirmPassword]);
    useEffect(() => {
        // 중복된ID 있을 경우
        if (!isCheckIdPass && checkIdDone) {
            resetId(id);
        }
        else if (isCheckIdPass && checkIdDone) {
            resetId(id);
        }
    }, [isCheckIdPass, checkIdDone, id, resetId]);
    const onSubmit = useCallback((e) => {
        e.preventDefault();
        checkIdDone && isCheckIdPass && !checkPasswordError && dispatch({
            type: SIGN_UP_REQUEST,
            data: {
                id,
                nickname,
                password
            }
        })
    }, [id, nickname, password, checkIdDone, isCheckIdPass, checkPasswordError, dispatch]);
    // useEffect(()=>{
    //      if(signUpDone) {
    //      Router.push('/');
    //}
    //},[signUpDone])
    useEffect(() => {
        signUpError && alert(signUpError);
    }, [signUpError]);

    return (
        <>
            {
                signUpDone ? <SignupSuccess />
                    :
                    <Form onSubmit={onSubmit}>
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
                                                <ErrorMsg color="green"> Good ID 👍</ErrorMsg>
                                                :
                                                <ErrorMsg>❗ {checkIdError}</ErrorMsg>
                                        }
                                    </>
                                    :
                                    <>
                                        {
                                            ID_REG.test(id) ?
                                                <ErrorMsg>❗ Click Check Button 👉</ErrorMsg>
                                                :
                                                <ErrorMsg>
                                                    {
                                                        id && "❗ first character have to use lowercase letter and Only 5 to 15 lower case letters and numbers are allowed"
                                                    }
                                                </ErrorMsg>
                                        }
                                    </>
                            }
                        </div>
                        <Input type="text" placeholder="Enter NickName" required onChange={setNickname} maxLength="15" value={nickname} />
                        <Input type="password" placeholder="Enter Password" required onChange={onChangePassword} value={password} maxLength="15" />
                        <div>
                            <Input type="password" placeholder="Confirm Password" required onChange={onChangeConfirmPassword} value={confirmPassword} maxLength="15" />
                            {
                                checkPasswordError ?
                                    <ErrorMsg> ❗ password is different </ErrorMsg>
                                    :
                                    <ErrorMsg color="green">
                                        {
                                            confirmPassword && "password is same 👍"
                                        }
                                    </ErrorMsg>
                            }
                        </div>
                        <PurpleBtn type="submit" loading={signUpLoading.toString()}>Submit</PurpleBtn>
                    </Form>
            }
        </>
    );
};
export default SignupForm;