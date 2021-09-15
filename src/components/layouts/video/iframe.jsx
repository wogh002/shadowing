import React, { useCallback } from 'react';
import YouTube from 'react-youtube';
const Iframe = ({ videoInfo }) => {
    const start = Math.floor(videoInfo.captions[videoInfo.selectedIndex].start);
    const dur = Math.ceil(videoInfo.captions[videoInfo.selectedIndex].duration);
    console.log(`start : ${start}`);
    console.log(`dur : ${dur}`);
    const opts = {
        height: '360',
        width: '640',
        playerVars: {
            autoplay: 1,
            playlist: videoInfo.videoId,
            enablejsapi: 1,
            disablekb: 1,
            controls: 0,
            rel: 0,
        },
    };
    const onStateChange = useCallback((event) => {
        console.log(event.data);
        console.log(event.target);
        const timer = () => {
            if (event.data === 2) {
                //일시정지상태일경우 
                event.target.stopVideo();
            }
            event.target.seekTo(start);
        }
        if (event.data === 1) { //재생중
            setTimeout(timer, dur);
        }
        else if (event.data === 2) { //일시정지
            clearTimeout(timer);
            event.target.stopVideo();
        }
    }, []);
    // dom이 준비된 후 에 배치해보자.

    return <YouTube
        id="player"
        src="https://www.youtube.com/embed/"
        videoId={videoInfo.videoId}
        opts={opts}
        onStateChange={onStateChange}
    />
};

export default Iframe;