import axios from 'axios';

/**
 * Configuração base da API
 */
const api = axios.create({
  baseURL: process.env.API_CEP,
});

export default api;
