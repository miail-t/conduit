import axios from 'axios';

const APP_URL: string = 'https://conduit.productionready.io/api/';
const axiosInst = axios.create({
    withCredentials: false,
    baseURL: APP_URL,
});

axiosInst.interceptors.request.use((config) => {
    const accessToken = localStorage.getItem('token');
    if (!accessToken) {
        return config;
    }

    const headers = {
        ...config.headers,
        Authorization: `Token ${accessToken}`,
    };

    return { ...config, headers };
});

axiosInst.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response) {
            throw error.response.data;
        }
    }
);

export default axiosInst;
