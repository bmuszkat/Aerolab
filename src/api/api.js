import axios from 'axios';

const baseURL = 'https://coding-challenge-api.aerolab.co';

const Token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTVkZTVhMzhiYWEwMzAwMjE5YmE1NjIiLCJpYXQiOjE2MzM1NDM1ODd9._0oZORx0TuJq90VsO5KrCXILOKpKzxlEM2i5h-a5YKU';


export const api = axios.create({ baseURL });

api.interceptors.request.use(async (config) => {
    config.headers['Authorization'] = `Bearer ${Token}`;
    config.headers['Content-Type'] = 'application/json ';
    config.headers['Accept'] = 'application/json';
  return config;
});