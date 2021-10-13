import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_VIDEO_REQUEST } from '../../../reducers/video';
import VideoItem from './videoItem';
import VideoDetail from './videodetail';
import styled, { css } from 'styled-components';
const Section = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 35px;
    ul{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
     /* --- desktop --- */
    @media ${({ theme: { desktop } }) => desktop} {
        flex-direction: row;
        justify-content: space-around;
        ul{
            width: 15%;
        }
        ${({ display }) => display === "true" && css`
        /* selectedVideo 없다면 */
            ul {
                flex-direction: row;
                flex-wrap:wrap;
                justify-content: center;
                width: 100%;
            }
        `}
    }
`
const Videolist = () => {
    const dispatch = useDispatch();
    const {
        videos,
        loadVideoDone,
        videoInfo
    } = useSelector(({ videoReducer }) => videoReducer);
    useEffect(() => {
        dispatch({ type: LOAD_VIDEO_REQUEST });
    }, [dispatch]);
    return (
        <Section display={(!videoInfo).toString()}>
            {
                videoInfo && <VideoDetail videoInfo={videoInfo} />
            }
            <ul>
                {
                    loadVideoDone &&
                    videos.map(video => <VideoItem
                        video={video}
                        key={video.id}
                        display={(!videoInfo).toString()}
                    />)
                }
            </ul>
        </Section>
    )
}
export default Videolist;