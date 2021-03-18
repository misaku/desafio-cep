import axios from 'axios';

const api = axios.create({
  baseURL: process.env.API_CEP,
});

export default api;
