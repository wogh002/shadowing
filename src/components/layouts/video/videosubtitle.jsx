import React, { useRef, useEffect } from 'react';
import { Section } from '../../../styles/video/videoSubTitle';
import { useDispatch } from 'react-redux';
import { SCROLL_SCRIPT_REQUEST } from '../../../reducers/video';
import Script from './script';
const VideoSubTitle = ({ videoInfo }) => {
    const DISTANCE = 250;
    const FIRST_SCRIPT = "EP.";
    const target = useRef();
    const belowDirectionTarget = useRef();
    const aboveDirectionTarget = useRef();
    const dispatch = useDispatch();
    useEffect(() => {
        const lastIndex = videoInfo.captions[videoInfo.captions.length - 1].curIndex;
        // TODO: 서버에서 endIndex를 정상적으로 받아온다면 주석 해제.
        // if(videoInfo.endIndex === lastIndex) {
        //     return false;
        // }
        const io = new IntersectionObserver(([{ isIntersecting }]) => {
            isIntersecting && dispatch({
                type: SCROLL_SCRIPT_REQUEST,
                data: {
                    lastIndex,
                    scrollDirection: isIntersecting,
                }
            })
        }, {
            threshold: 0.7
        });
        io.observe(belowDirectionTarget.current);
        return () => io && io.disconnect(belowDirectionTarget)
    }, [videoInfo, dispatch]);

    useEffect(() => {
        if (videoInfo.captions[0].text.includes(FIRST_SCRIPT)) {
            return false;
        }
        const firstIndex = videoInfo.captions[0].curIndex;
        const io = new IntersectionObserver(([{ isIntersecting }]) => {
            if (isIntersecting) {
                dispatch({
                    type: SCROLL_SCRIPT_REQUEST,
                    data: {
                        firstIndex,
                        scrollDirection: false,
                    }
                })
                target.current.scrollTop = DISTANCE;
            }
        }, {
            threshold: 1
        });
        io.observe(aboveDirectionTarget.current);
        return () => io && io.disconnect(aboveDirectionTarget);
    }, [dispatch, videoInfo, target]);
    return (
        <Section>
            <h1>SCRIPT</h1>
            <dl ref={target}>
                <div ref={aboveDirectionTarget}>
                </div>
                {
                    videoInfo.captions.map((item) =>
                        <Script
                            videoId={videoInfo.videoId}
                            key={item.curIndex}
                            curIndex={item.curIndex}
                            selectedIndex={videoInfo.selectedIndex}
                            item={item}
                        />)
                }
                <div ref={belowDirectionTarget}>
                </div>
            </dl>
        </Section >
    )
}
export default VideoSubTitle;