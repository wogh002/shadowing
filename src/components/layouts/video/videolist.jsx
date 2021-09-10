import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_VIDEO_REQUEST } from '../../../reducers/video';
import VideoItem from './videoItem';
import VideoDetail from './videodetail';
import styled from 'styled-components';
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
    }
`
const Videolist = () => {
    const dispatch = useDispatch();
    const {
        videos,
        loadVideoDone,
        selectedVideo,
        videoInfo
    } = useSelector(({ videoReducer }) => videoReducer);
    useEffect(() => dispatch({ type: LOAD_VIDEO_REQUEST }), [dispatch]);
    return (
        <Section>
            {
                selectedVideo && <VideoDetail videoInfo={videoInfo} />
            }
            <ul>
                {
                    loadVideoDone &&
                    videos.map(video => <VideoItem video={video} key={video.id} />)
                }
            </ul>
        </Section>
    )
}
export default Videolist;