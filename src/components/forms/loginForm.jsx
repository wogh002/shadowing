import { React, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input, PurpleBtn, Span, ErrorMsg } from '../../styles/formElements/style';
import { Form } from '../../styles/forms/loginForm';
import useInput from '../../hooks/useInput';
import { LOGIN_REQUEST } from '../../reducers/user';
import { useHistory } from 'react-router-dom';
const LoginForm = () => {
    const { logInLoading, logInDone, logInError } = useSelector(({ user }) => user);
    const history = useHistory();
    const dispatch = useDispatch();
    const [id, setId] = useInput('');
    const [password, setPassword] = useInput('');
    //2.로그인 성공시 me에는 객체 (유저정보가 담긴다)
    //4.로그인 실패시 에러메세지를 서버에서 남겨준다. 팝업을 띄워서 해보자.
    const onSubmit = useCallback((e) => {
        e.preventDefault();
        dispatch({
            type: LOGIN_REQUEST,
            data: {
                userId: id,
                password
            }
        });
    }, [id, password, dispatch]);
    useEffect(() => {
        logInDone && history.push('/');
    }, [logInDone, history]);
    // useEffect(()=>{
    //     // 돔에 장착된 이후로.
    //     // logInDone &&  
    // },[]);

    return (
        <Form onSubmit={onSubmit}>
            <h1>Login</h1>
            <Input
                type="text"
                placeholder="Enter ID"
                required
                maxLength="15"
                onChange={setId}
                value={id}
            />
            <Input
                type="password"
                placeholder="Enter Password"
                required
                maxLength="15"
                onChange={setPassword}
                value={password}
            />
            {
                logInError &&
                <ErrorMsg>logInError</ErrorMsg>
            }
            <PurpleBtn type="submit" loading={logInLoading.toString()}>
                Login
            </PurpleBtn>
        </Form>

    )
};
export default LoginForm;