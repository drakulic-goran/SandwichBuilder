import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://sandwich-builder-469a7.firebaseio.com/'
});

export default instance;