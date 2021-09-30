import React from 'react';
import YouTube from 'react-youtube';
const Iframe = ({ videoInfo }) => {
    const { captions, selectedIndex,videoId } = videoInfo;
    const getCurScriptInfo = () => {
        // getCurScriptInfo 함수의 목적 === 현재의 selectedIndex 를 구해야한다.
        //Tip.데이터 10개씩 불러옴.
        return captions[selectedIndex - captions[0].curIndex]
    }
    const start = Math.floor(getCurScriptInfo().start);
    const removedFloatDur = Math.ceil(getCurScriptInfo().duration);
    const endTime = start + removedFloatDur;
    const dur = Number(`${removedFloatDur.toString()}000`);
    let id = null;
    let remain = null;
    let RESTART = false;
    const PLAYING = 1;
    const STOP = 2;
    const opts = {
        height: '360',
        width: '640',
        playerVars: {
            autoplay: 1,
            playlist: videoId,
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
        videoId={videoId}
        opts={opts}
        onStateChange={onStateChange}
    />
};

export default Iframe;