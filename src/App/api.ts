import axios from 'axios';
import EnvironmentConfig from '@src/Environment.config';

/**
 * Configuração base da API
 */
const api = axios.create({
  baseURL: EnvironmentConfig.service.api,
});

export default api;
