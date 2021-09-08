import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_VIDEO_REQUEST } from '../../../reducers/video';
import VideoItem from './videoItem';
const Videolist = () => {
    const dispatch = useDispatch();
    const { videos, loadVideoDone } = useSelector(({ videoReducer }) => videoReducer);
    useEffect(() => dispatch({ type: LOAD_VIDEO_REQUEST }), [dispatch]);
    return (
        <ul>
            {
                loadVideoDone &&
                videos.map(video => <VideoItem video={video} key={video.id} />)
            }
        </ul>
    )
}
export default Videolist;