import axios from 'axios';
const youtubeAxios = axios.create({
    baseURL: '/v3',
    params: {
        key: process.env.REACT_APP_YOUTUBE_API_KEY,
    }
});
export default youtubeAxios;