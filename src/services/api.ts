import axios, { AxiosInstance } from 'axios';
import constants from '../utils/constants';

export const getInstance = async () => {
  const token: string | null = await localStorage.getItem('token');

  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
  }

  const instance: AxiosInstance = axios.create({
    baseURL: constants.url.local,
    headers,
    timeout: 10000,
  });

  instance.interceptors.request.use((response) => response, (error) => Promise.reject(error));

  return instance;
}