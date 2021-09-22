import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { LOAD_USER_REQUEST } from '../reducers/user';
import Header from '../components/layouts/landing/header';
import VideoList from '../components/layouts/video/videolist';
const Videos = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: LOAD_USER_REQUEST });
    }, [dispatch]);
    return (
        <>
            <Header />
            <VideoList />
        </>
    )
}
export default Videos;