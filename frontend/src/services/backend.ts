import axios, { AxiosError } from 'axios';

export default axios.create({
  baseURL: 'http://localhost:8080',
});

export type ApiError = AxiosError;
