import axios, { InternalAxiosRequestConfig } from 'axios';

export const baseUrl = 'http://dog.ceo/api/breed/pug/images/random/20';

const api = axios.create({
  baseURL: baseUrl,
});

api.interceptors.request.use((config:InternalAxiosRequestConfig<any>) => {
  api.defaults.headers.Accept = 'text/html, application/xhtml+xml, application/xml;q=0.9, */*;q=0.8';
  return config;
}, (errpr) => Promise.reject(errpr));

export default api;
