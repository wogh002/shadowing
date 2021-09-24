import React, { memo } from 'react';
import styled, { css } from 'styled-components';
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
        ${({ display }) => display === "true" && css`
          /* selected video 가 없다면 */
            width: 20%;
            margin : 0 12px 15px 0;
        `}
    }
`
const VideoItem = memo(({ video, display }) => {
    const { thumbnails, title, resourceId: { videoId } } = video.snippet;
    const dispatch = useDispatch();
    const onShowVideo = () => {
        dispatch({
            type: LOAD_SCRIPT_REQUEST,
            data: videoId,
            // me에서 db id도 전달해줘야함.
        });
    }
    return (
        <ListItem onClick={onShowVideo} display={display}>
            <div>
                <img src={thumbnails.medium.url} alt="thumbnail" />
                <h1>{title}</h1>
            </div>
        </ListItem>
    )
});


export default VideoItem;