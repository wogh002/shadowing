import React, { memo, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_SCRIPT_REQUEST } from '../../../reducers/video';
import { useHistory } from 'react-router';
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
    const { me } = useSelector(({ user }) => user);
    const history = useHistory();
    const dispatch = useDispatch();
    useEffect(() => {
        !me && history.push('/error');
    }, [history, me]);
    const onShowScriptWithVideo = () => {
        dispatch({
            type: LOAD_SCRIPT_REQUEST,
            data: {
                id: me.id,
                videoId,
            },
        });
    }
    return (
        <ListItem onClick={onShowScriptWithVideo} display={display}>
            <div>
                <img src={thumbnails.medium.url} alt="thumbnail" />
                <h1>{title}</h1>
            </div>
        </ListItem>
    )
});
export default VideoItem;