import React, { useCallback } from 'react';
import YouTube from 'react-youtube';
const Iframe = ({ videoInfo }) => {
    //1초 1000ms
    //10초 10000ms
    //11초 11000ms
    const start = Math.floor(videoInfo.captions[videoInfo.selectedIndex].start);
    const removedFloatDur = Math.ceil(videoInfo.captions[videoInfo.selectedIndex].duration);
    const endTime = start + removedFloatDur;
    const dur = Number(`${removedFloatDur.toString()}000`);
    let id = null;
    let remainTime = null;
    let restart = null;

    console.log(`start : ${start} s`);
    console.log(`dur : ${dur} ms`);
    const opts = {
        height: '360',
        width: '640',
        playerVars: {
            playlist: videoInfo.videoId,
            enablejsapi: 1,
            disablekb: 1,
            controls: 0,
            rel: 0,
            start
        },
    };
    const onStateChange = useCallback((event) => {
        const { playerInfo: { currentTime } } = event.target;
        if (restart && event.data === 1) {
            id = setTimeout(() => { event.target.seekTo(start) }, remainTime);
            restart = false;
            return false;
        }
        if (event.data === 1) { //재생중
            id = setTimeout(() => { event.target.seekTo(start) }, dur);
        }
        else if (event.data === 2) { //일시정지
            //일시정지 누르면 기존의 setTimeout 현재 갖고있는 timer정지 시켜야함
            clearTimeout(id);
            //일시정지 누르면 남아있는 초를 가져와야한다.
            remainTime = Number(`${(endTime - Math.floor(currentTime)).toString()}000`);
            // “동영상을 다시 재개 한다면”  remainTime 을 넣은 타이머가 재개되어야 한다면.
            restart = true;
        }
    }, []);

    return <YouTube
        id="player"
        src="https://www.youtube.com/embed/"
        videoId={videoInfo.videoId}
        opts={opts}
        onStateChange={onStateChange}
    />
};

export default Iframe;