import axiosInst from './axios';

class AxiosHttpClient {
    get(url: string, data?: object, headers?: object, params?: object) {
        return axiosInst.get(url, { data, headers, params });
    };

    post(url: string, data?: object, headers?: object) {
        return axiosInst.post(url, data, { headers });
    };

    put(url: string, data?: object, headers?: object) {
        return axiosInst.put(url, data, { headers });
    };
    delete(url: string, data?: object, headers?: object) {
        return axiosInst.delete(url, { headers });
    };
}

export default AxiosHttpClient;
