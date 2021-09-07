import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_VIDEO_REQUEST } from '../../../reducers/video';

const Videolist = () => {
    const { videos } = useSelector(({ video }) => video);
    const dispatch = useDispatch();
    useEffect(() => dispatch({ type: LOAD_VIDEO_REQUEST }), [dispatch]);
    return (
        <h1>asdasdas</h1>
    )
}
export default Videolist;