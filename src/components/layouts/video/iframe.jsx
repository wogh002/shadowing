import React from 'react';
import YouTube from 'react-youtube';
const Iframe = ({ videoInfo }) => {
    //1초 1000ms
    //10초 10000ms
    //11초 11000ms
    console.log(videoInfo);
    const start = Math.floor(videoInfo.captions[videoInfo.selectedIndex - videoInfo.captions[0].curIndex].start);
    //captions[996]
    //996-986=10;
    const removedFloatDur = Math.ceil(videoInfo.captions[videoInfo.selectedIndex - videoInfo.captions[0].curIndex].duration);
    const endTime = start + removedFloatDur;
    const dur = Number(`${removedFloatDur.toString()}000`);
    let id = null;
    let remain = null;
    let RESTART = false;
    const PLAYING = 1;
    const STOP = 2;
    console.log(`start : ${start} s`);
    console.log(`dur : ${dur} ms`);

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
            start
        },
    };
    const changeRestartState = () => {
        RESTART = !RESTART;
    }
    const setRemainTime = (currentTime) => {
        remain = Number(`${(endTime - Math.floor(currentTime)).toString()}000`);
    }
    const onStateChange = (event) => {
        const { target, target: { playerInfo: { currentTime } } } = event;
        switch (event.data) {
            case RESTART && PLAYING:
                id = setTimeout(() => { target.seekTo(start) }, remain);
                changeRestartState();
                break;
            case PLAYING:
                id = setTimeout(() => { target.seekTo(start) }, dur);
                break;
            case STOP:
                clearTimeout(id);
                setRemainTime(currentTime);
                changeRestartState();
                break;
            default: break;
        }
    };
    return <YouTube
        id="player"
        src="https://www.youtube.com/embed/"
        videoId={videoInfo.videoId}
        opts={opts}
        onStateChange={onStateChange}
    />
};

export default Iframe;