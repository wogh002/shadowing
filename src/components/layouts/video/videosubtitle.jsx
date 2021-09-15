import React from 'react';
import styled from 'styled-components';
import Script from './script';

const Section = styled.section`
    border:  1px solid #e0e1e6;
    padding: 25px;
    h1 {
        font-size : 15px;
    }
    dl {
        font-size : 12px;
    }
    dl div{
        display: flex;
        justify-content: center;
        align-items : center;
        margin-bottom : 13px;
    }
    dl dt {
        margin-right : 20px;
    }
      /* --- desktop --- */
    @media ${({ theme: { desktop } }) => desktop} {
        h1 {
            font-size : 17px;
        }
        dl {
            font-size : 15px;
        }
    }
`
const VideoSubTitle = ({ videoInfo }) => {
    return (
        <Section>
            <h1>SCRIPT</h1>
            <dl>
                {
                    videoInfo.captions.map((item, index) =>
                        <Script
                            key={index}
                            curIndex={index}
                            selectedIndex={videoInfo.selectedIndex}
                            item={item}
                        />)
                }
            </dl>
        </Section>
    )
}
export default VideoSubTitle;