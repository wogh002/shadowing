import React from 'react';
import Header from '../components/layouts/landing/header';
import Footer from '../components/layouts/landing/footer';
import { Input, PurpleBtn } from "../styles/formElements/style";
import { Form } from "../styles/forms/signupForm";
const SignupForm = () => {
    // 1.리덕스 설치
    //2.리듀서, 리덕스 사가 설정
    //3.초기 상태설정.
    return (
        <>
            <Header />
            <Form>
                <h1>Sign Up</h1>
                <div>
                    <Input type="text" placeholder="Enter ID" required />
                    <span>CHECK✔</span>
                </div>
                <Input type="password" placeholder="Enter NickName" required />
                <Input type="password" placeholder="Enter Password" required />
                <Input type="password" placeholder="Confirm Password" required />
                <PurpleBtn type="submit">Submit</PurpleBtn>
            </Form>
            <Footer />
        </>
    );
};

export default SignupForm;