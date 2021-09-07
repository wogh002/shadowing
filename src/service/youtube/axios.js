import axios from 'axios';
const youtubeAxios = axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/https://youtube.googleapis.com/youtube/v3',
    // headers: {
    //     'Access-Control-Allow-Origin': '*',
    //     'Access-Control-Allow-Credentials': true,
    //     'Access-Control-Allow-Methods': 'GET',
    //     'Access-Control-Allow-Headers': 'Content-Type, Authorization'
    // },
    params: {
        key: process.env.REACT_APP_YOUTUBE_API_KEY,
    }
});
export default youtubeAxios;
