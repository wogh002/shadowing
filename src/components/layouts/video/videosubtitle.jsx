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
    //1.스크립트 로딩시 처음 스크립트를 위로 올렸을 때만 무한스크롤 되지 않게 해야된다.
    const DISTANCE = 250;
    const target = useRef();
    const belowDirectionTarget = useRef();
    const aboveDirectionTarget = useRef();
    const dispatch = useDispatch();
    const lastIndex = videoInfo.captions.length - 1;
    console.log(`lastIndex : ${lastIndex}`);
    useEffect(() => {
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
    }, [lastIndex, dispatch]);

    useEffect(() => {
        // 첫번째 인덱스가 보이면 바로 함수종료 시키자 (무한스크롤 요청 되지 않게)
        if (videoInfo.selectedIndex < 6) {
            return false;
        }
        const io = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                dispatch({
                    type: SCROLL_SCRIPT_REQUEST,
                    data: {
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
                    videoInfo.captions.map((item, index) =>
                        <Script
                            videoId={videoInfo.videoId}
                            key={index}
                            curIndex={index}
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