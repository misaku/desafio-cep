import * as JSON5 from 'json5';
import { ICacheProvider } from '../cache.provider.interfaces';

export default class RedisCacheFakeProvider implements ICacheProvider {
  private redis: { key: string; value: string }[];

  constructor() {
    this.redis = [
      {
        key: '12345678',
        value: JSON5.stringify({
          cep: '12345-678',
          logradouro: 'Rua Castro Alves',
          complemento: '',
          bairro: 'Vila Tibério',
          localidade: 'Ribeirão Preto',
          uf: 'SP',
          ibge: '3543402',
          gia: '5824',
          ddd: '16',
          siafi: '6969',
        }),
      },
    ];
  }

  async recover(key: string): Promise<string | null> {
    return this.redis.find(element => element.key === key)?.value || null;
  }

  async save(key: string, value: string): Promise<void> {
    await this.redis.push({ key, value });
  }
}
