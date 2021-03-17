// eslint-disable-next-line import/no-extraneous-dependencies
import MockAdapter from 'axios-mock-adapter';
import * as JSON5 from 'json5';
import axios from '@App/api';
import CepServices from '@modules/Cep/Cep.services';

const mock = new MockAdapter(axios);

describe('CepServices', () => {
  it('should be able response', async () => {
    const cep = '123456';
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
    const cepService = new CepServices();
    const response = await cepService.getAddress(cep);
    expect(response.success).toBe(true);
    expect(JSON5.stringify(response.data)).toBe(JSON5.stringify(data));
  });
  it('should be able response error', async () => {
    const cep = '123456';
    const data = {
      erro: 'Não encontrado',
    };
    mock.onGet(`/${cep}/json/unicode/`).reply(200, data);
    const cepService = new CepServices();
    const response = await cepService.getAddress(cep);
    expect(response.success).toBe(false);
    expect(JSON5.parse(JSON5.stringify(response.data)).erro).toBe('Não foi possível encontrar um resultado');
  });

  it('should be erro when have bad response', async () => {
    const cep = '123456';
    const data = {
      erro: 'Não encontrado',
    };
    mock.onGet(`/${cep}/json/unicode/`).reply(400, data);
    const cepService = new CepServices();
    const response = await cepService.getAddress(cep);
    expect(response.success).toBe(false);
    expect(JSON5.parse(JSON5.stringify(response.data)).erro).toBe(
      'Houve um erro na requisição tente novamente mais tarde!',
    );
  });
});
