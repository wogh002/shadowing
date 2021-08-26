import React from "react";
import appStoreLogo from "../../../assets/appStoreLogo.png";
import googlePlayLogo from "../../../assets/googlePlayLogo.png";
import goToTop from "../../../assets/goToTop.png";
import { AppInfoWrapper, AppInfo } from "../../../styles/landing/footer";
const Footer = () => {
    return (
        <AppInfoWrapper>
            <AppInfo>
                <h2>
                    Help center
                </h2>
                <ul>
                    <li>Frequently Asked Questions</li>
                    <li>How to use This app</li>
                    <li>Support</li>
                </ul>
            </AppInfo>
            <AppInfo>
                <h2>
                    Maker
                </h2>
                <ul>
                    <li>Privacy</li>
                    <li>Press</li>
                    <li>Partnership</li>
                </ul>
            </AppInfo>
            <AppInfo>
                <h2>
                    Download the application
                </h2>
                <img src={appStoreLogo} alt="Download App Store" />
                <img src={googlePlayLogo} alt="Download Google Store" />
            </AppInfo>
            <AppInfo>
                <img src={goToTop} alt="Finger" />
            </AppInfo>
        </AppInfoWrapper>

    )
};

export default Footer;