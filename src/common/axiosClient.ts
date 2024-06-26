import axios, { AxiosError } from 'axios';
// import { redirectToLogin } from './commonUtils';

const axiosClient = axios.create({
  baseURL: 'https://demoapplicationapi-production.up.railway.app/',
});

axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  config.headers.Authorization = 'Bearer' + token;
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    if (error.response?.status === 401 && window.location.pathname !== '/login') {
      // redirectToLogin();
      return;
    }
    return Promise.reject(error);
  },
);

export default axiosClient;
