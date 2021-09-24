import React, { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { SCROLL_SCRIPT_REQUEST } from '../../../reducers/video';
import Script from './script';
const Section = styled.section`
    border:  1px solid #e0e1e6;
    padding: 25px;
    & > h1 {
        font-size : 13px;
        font-weight: 700;
        letter-spacing: -0.02em;
        text-align : center;
        margin-bottom: 25px;
    }
    dl {
        font-size : 12px;
        overflow-y : scroll;
        height: 250px;
    }
      /* --- desktop --- */
    @media ${({ theme: { desktop } }) => desktop} {
        dl {
            font-size : 15px;
        }
        & > h1 {
            font-size : 19px;
        }
    }
`
const VideoSubTitle = ({ videoInfo }) => {
    const target = useRef();
    const dispatch = useDispatch();
    const lastIndex = videoInfo.captions.length - 1;
    useEffect(() => {
        const io = new IntersectionObserver(([{ isIntersecting }]) => {
            isIntersecting && dispatch({
                type: SCROLL_SCRIPT_REQUEST,
                lastIndex,
                scrollDirection: isIntersecting,
            })
        }, {
            threshold: 0.7
        });
        io.observe(target.current);
        return () => io && io.disconnect(target)
    }, [lastIndex, dispatch]);
    return (
        <Section>
            <h1>SCRIPT</h1>
            <dl>
                {
                    videoInfo.captions.map((item, index) =>
                        <Script
                            videoId={videoInfo.videoId}
                            key={index}
                            curIndex={index}
                            selectedIndex={videoInfo.selectedIndex}
                            item={item}
                        />)
                }
                <div ref={target}>
                </div>
            </dl>
        </Section>
    )
}
export default VideoSubTitle;