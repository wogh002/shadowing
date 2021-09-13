import React, { useCallback } from 'react';
import YouTube from 'react-youtube';
const Iframe = ({ videoInfo }) => {
    //videoInfo.captions[videoInfo.curIndex].dur,
    const opts = {
        height: '360',
        width: '640',
        playerVars: {
            playlist: videoInfo.videoId,
            enablejsapi: 1,
            disablekb: 1,
            controls: 0,
            rel: 0,
            start: videoInfo.captions[videoInfo.curIndex].start,
            end: videoInfo.captions[videoInfo.curIndex].start + 2,
        },
    };
    const onStateChange = useCallback((event) => {
        console.log(event.data);
        console.log(event.target);
        // const timer = () => {
        //     event.target.seekTo(videoInfo.captions[videoInfo.curIndex].start);
        // }
        // if (event.data === 1 && !done) { //재생중
        //     setTimeout(timer, 5000);
        //     done = true;
        // }
        // else if (event.data === 2) { //일시정지
        //     //일시정지라면 비디오 초기화.
        //     event.target.stopVideo();
        // }
        //종료 0
    }, []);

    return <YouTube
        id="player"
        videoId={videoInfo.videoId}
        opts={opts}
        onStateChange={onStateChange}
    />
};

export default Iframe;