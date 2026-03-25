import axios from 'axios';

export const HOST_API = 'http://localhost:1337/api';

export const api = axios.create({
    baseURL: HOST_API,
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
});

api.interceptors.response.use((response) => response, (error) => {
    if (error.response?.status === 401) {
        console.log('Unauthorized, logging out...');
        //logout
    } 
    return Promise.reject(error);
})