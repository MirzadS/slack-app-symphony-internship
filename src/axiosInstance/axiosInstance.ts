/* eslint-disable no-param-reassign */
import axios from 'axios';
import AuthHelpers from '../utils/AuthHelpers';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 1000,
});

instance.interceptors.request.use(
    (config) => {
        const token = AuthHelpers.getToken();
        if (token) {
            config.headers!.Authorization = `Bearer ${token}` as string;
        }
        return config;
    },
    (error) => Promise.reject(error)
);
export default instance;
