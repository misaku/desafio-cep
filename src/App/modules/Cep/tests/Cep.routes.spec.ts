import MockAdapter from 'axios-mock-adapter';
import * as JSON5 from 'json5';
import JWT from 'jsonwebtoken';
import axios from '../../../api';
import App from '../../../index';

import '../../../Container';

const mock = new MockAdapter(axios);
const token = JWT.sign(
  {
    id: 'teste',
    name: 'usuario',
    email: 'usuario@teste.com',
  },
  'BuscaCep-LuizaLabs',
);

const cep = '14050360';
const data = {
  cep: '15070-000',
  logradouro: 'Rua Regente Feijó',
  complemento: 'de 700/701 ao fim',
  bairro: 'Vila Elvira',
  localidade: 'São José do Rio Preto',
  uf: 'SP',
  ibge: '3549805',
  gia: '6476',
  ddd: '17',
  siafi: '7097',
};
mock.onGet(`/${cep}/json/unicode/`).reply(200, data);
jest.mock('../../User/User.repository', () =>
  jest.fn().mockImplementation(() => ({
    findByIdAndEmail: (id: string, email: string) => true,
  })),
);
const FactoryServer = new App();
const server = FactoryServer.getServer();
beforeAll(async done => {
  await FactoryServer.start(true);
  done();
}, 30000);

afterAll(async done => {
  await server.stop();
  done();
}, 30000);

describe('teste route cep', () => {
  it('return 200 status OK', async () => {
    const options = {
      method: 'GET',
      url: `/cep/${cep}`,
      headers: {
        authorization: `Bearer ${token}`,
      },
    };
    const response = await server.inject(options);
    expect(response.statusCode).toBe(200);
    expect(JSON5.stringify(JSON5.parse(response.payload))).toBe(JSON5.stringify(data));
  });
  it('return 401 status', async () => {
    const options = {
      method: 'GET',
      url: `/cep/${cep}`,
    };
    const response = await server.inject(options);
    expect(response.statusCode).toBe(401);
  });
});

describe('teste route cep2', () => {
  it('return 200 status OK', async () => {
    const options = {
      method: 'GET',
      url: `/cep2/${cep}`,
      headers: {
        authorization: `Bearer ${token}`,
      },
    };
    const response = await server.inject(options);
    expect(response.statusCode).toBe(200);
    expect(JSON5.stringify(JSON5.parse(response.payload))).toBe(JSON5.stringify(data));
  });
  it('return 401 status', async () => {
    const options = {
      method: 'GET',
      url: `/cep2/${cep}`,
    };
    const response = await server.inject(options);
    expect(response.statusCode).toBe(401);
  });
});
