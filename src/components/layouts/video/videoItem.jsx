import React, { useCallback, memo } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { LOAD_SCRIPT_REQUEST } from '../../../reducers/video';
const ListItem = styled.li`
    margin-bottom: 10px;
    cursor: pointer;
    div img{
        display: block;
        width: 100%;
        margin-bottom: 5px;
    }
    div h1 {
        font-size : 12px;
        letter-spacing: -0.02em;
    }
     /* --- desktop --- */
    @media ${({ theme: { desktop } }) => desktop} {
        width: 100%;
        div h1 {
            font-size : 15px;
        }
    }
`
const VideoItem = memo(({ video }) => {
    const { thumbnails, title, resourceId: { videoId } } = video.snippet;
    const dispatch = useDispatch();
    const onShowVideo = useCallback(() => {
        dispatch({
            type: LOAD_SCRIPT_REQUEST,
            data: { videoId },
        });
    }, [dispatch]);
    return (
        <ListItem onClick={onShowVideo}>
            <div>
                <img src={thumbnails.medium.url} />
                <h1>{title}</h1>
            </div>
        </ListItem>
    )
});


export default VideoItem;