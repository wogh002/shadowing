import React from 'react';
import styled from 'styled-components';
import VideoSubTitle from './videosubtitle';
import Iframe from './iframe';
const Div = styled.div`
margin-bottom: 25px;
  h1 {
        font-size : 13px;
        font-weight: 700;
        letter-spacing: -0.02em;
        text-align : center;
        margin-bottom: 25px;
  }
    /* --- desktop --- */
    @media ${({ theme: { desktop } }) => desktop} {
      margin-bottom: 0;
      width: 55%;
    }
`
const IframeContainer = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom : 56.25%;
  margin-bottom: 10px;
  iframe {
    position : absolute;
    top : 0;
    left : 0;
    width : 100%;
    height : 100%;
  }
`
const VideoDetail = ({ videoInfo }) => {
  return (
    <Div>
      <IframeContainer>
        {/* <iframe
          title="superVideo"
          id="ytplayer"
          type="text/html"
          width="640"
          height="360"
          src={`https://www.youtube.com/embed/${videoInfo.videoId}?autoplay=1&playlist=${videoInfo.videoId}&loop=1&start=30`}
          frameBorder="0"
        /> */}
        <Iframe  videoInfo={videoInfo} src="https://www.youtube.com/embed/"/>
      </IframeContainer>
      <h1>
        DON'T SAY THAT <br />
        i would've done,
        should've done,
        could've done 🤷‍♂️
      </h1>
      <VideoSubTitle videoInfo={videoInfo} />
    </Div>
  )
}

export default VideoDetail;
