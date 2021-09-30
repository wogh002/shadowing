import React, { useRef, useEffect } from 'react';
import { Section } from '../../../styles/video/videoSubTitle';
import { useDispatch } from 'react-redux';
import { SCROLL_SCRIPT_REQUEST } from '../../../reducers/video';
import Script from './script';
const VideoSubTitle = ({ videoInfo }) => {
    const DISTANCE = 250;
    const target = useRef();
    const belowDirectionTarget = useRef();
    const aboveDirectionTarget = useRef();
    const dispatch = useDispatch();
    useEffect(() => {
        const lastIndex = videoInfo.captions[videoInfo.captions.length - 1].curIndex;
        if (videoInfo.endIndex === lastIndex) {
            return false;
        }
        const io = new IntersectionObserver(([{ isIntersecting }]) => {
            isIntersecting && dispatch({
                type: SCROLL_SCRIPT_REQUEST,
                data: {
                    curIndex: lastIndex,
                    scrollDirection: isIntersecting,
                    videoId: videoInfo.videoId,
                }
            })
        }, {
            threshold: 0.3
        });
        io.observe(belowDirectionTarget.current);
        return () => io && io.disconnect(belowDirectionTarget)
    }, [videoInfo, dispatch]);

    useEffect(() => {
        const firstIndex = videoInfo.captions[0].curIndex;
        if (firstIndex === 0) {
            return false;
        }
        const io = new IntersectionObserver(([{ isIntersecting }]) => {
            if (isIntersecting) {
                dispatch({
                    type: SCROLL_SCRIPT_REQUEST,
                    data: {
                        curIndex: firstIndex,
                        scrollDirection: false,
                        videoId: videoInfo.videoId,
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