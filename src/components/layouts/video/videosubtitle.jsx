import React from 'react';
import styled from 'styled-components';
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
    console.log(videoInfo);
    return (
        <Section>
            <h1>SCRIPT</h1>
                {/* dl 에다 스크롤 */}
            <dl>
                {/* 반복문 돌려야함 div부터 */}
                {/* videoInfo.captions.map(video => <div> </div> ) */}
                <div>
                    <dt>00:12</dt>
                    <dd>i have confidenc!!!!!!!!!you can do this</dd>
                </div>
            </dl>
        </Section>
    )
}
export default VideoSubTitle;