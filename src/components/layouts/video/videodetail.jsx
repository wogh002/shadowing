import React from 'react';
import styled from 'styled-components';
import VideoSubTitle from './videosubtitle';
const Div = styled.div`
  h1 {
        font-size : 13px;
        font-weight: 700;
        letter-spacing: -0.02em;
        text-align : center;
  }
    /* --- desktop --- */
    @media ${({ theme: { desktop } }) => desktop} {
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
        <iframe
          title="superVideo"
          id="ytplayer"
          type="text/html"
          width="640"
          height="360"
          src={`https://www.youtube.com/embed/${videoInfo.videoId}?controls=0&disablekb=1&modestbranding=1"`}
          frameBorder="0"
        />
      </IframeContainer>
      <h1>
        DON'T SAY THAT <br />
        i would've done,
        should've done,
        could've done 🤷‍♂️
      </h1>
      <VideoSubTitle />
    </Div>
  )
}

export default VideoDetail;
