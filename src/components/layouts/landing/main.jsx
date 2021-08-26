import React from "react";
import illustration from "../../../assets/Illustration.png"
import { MainTag } from "../../../styles/landing/main";
import { Link } from 'react-router-dom';
const Main = () => {
    return (
        <MainTag>
            <h1>Shadowing</h1>
            <img src={illustration} alt="illustration" />
            <h2>what is Shadowing?</h2>
            <p>
                Thank you for loving korea<br />
                if you use this app, <br />you can speak Korean fluently <br />
                JUST TRUST THIS APP ! 💕
            </p>
            <Link to="/signup">
                <button>Sign Up</button>
            </Link>
        </MainTag>
    )
};

export default Main;