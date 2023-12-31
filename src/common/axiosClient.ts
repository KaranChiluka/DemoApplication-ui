import axios, { AxiosError } from 'axios';
import { redirectToLogin } from './commonUtils';

const axiosClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

axiosClient.interceptors.request.use((config) => {
  config.headers.token = localStorage.getItem('token');
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    if (error.response?.status === 401 && window.location.pathname !== '/login') {
      redirectToLogin();
      return;
    }
    return Promise.reject(error);
  },
);

export default axiosClient;
