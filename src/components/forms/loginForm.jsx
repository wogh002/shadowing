import { React, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input, PurpleBtn, ErrorMsg } from '../../styles/formElements/style';
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
            <div>
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
                    <ErrorMsg>{logInError}</ErrorMsg>
                }
            </div>
            <PurpleBtn type="submit" loading={logInLoading.toString()}>
                Login
            </PurpleBtn>
        </Form>

    )
};
export default LoginForm;