import axios from 'axios';

axios.create({
  baseURL: 'https://viacep.com.br/ws',
});

export default axios;
