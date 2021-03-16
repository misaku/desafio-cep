import CepBusiness from '../Cep.business';
import { ICepServices } from '../Cep.interfaces';
import RedisCacheFakeProvider from '../../../provider/cache/fakes/RedisCache.fake.provider';

let mockValid = true;
jest.mock('../Cep', () => ({
  isValid: (data: string) => mockValid,
  clearedValue: (data: string) => data,
  possibleNewCep: (data: string) => '14050300',
}));

describe('CepBusiness', () => {
  it('should be able get address method1 in first time', async () => {
    const cepBusiness = new CepBusiness(
      {
        getAddress: async data =>
          ({
            success: true,
            data: {
              cep: '14050360',
            },
          } as any),
      } as ICepServices,
      new RedisCacheFakeProvider(),
    );
    const response1 = await cepBusiness.getAddress('14050360');
    expect(response1.cep).toBe('14050360');
  });

  it('should be able get address method2 in first time', async () => {
    const cepBusiness = new CepBusiness(
      {
        getAddress: async data =>
          ({
            success: true,
            data: {
              cep: '14050360',
            },
          } as any),
      } as ICepServices,
      new RedisCacheFakeProvider(),
    );
    const response2 = await cepBusiness.getAddress2('14050360');
    expect(response2.cep).toBe('14050360');
  });

  it('should be able get address with cache', async () => {
    const cepBusiness = new CepBusiness(
      {
        getAddress: async data =>
          ({
            success: true,
            data: {
              cep: '12345678',
            },
          } as any),
      } as ICepServices,
      new RedisCacheFakeProvider(),
    );
    const response1 = await cepBusiness.getAddress('12345678');
    const response2 = await cepBusiness.getAddress2('12345678');
    expect(response1.cep).toBe(response2.cep);
    expect(response1.cep).toBe('12345-678');
  });
  it('should be able get address method1 in second time', async () => {
    const cepBusiness = new CepBusiness(
      {
        getAddress: async data =>
          ({
            success: data === '14050300',
            data: {
              cep: '14050300',
            },
          } as any),
      } as ICepServices,
      new RedisCacheFakeProvider(),
    );
    const response1 = await cepBusiness.getAddress('14050360');
    expect(response1.cep).toBe('14050300');
  });

  it('should be able get address method2 in second time', async () => {
    const cepBusiness = new CepBusiness(
      {
        getAddress: async data =>
          ({
            success: data === '14050300',
            data: {
              cep: '14050300',
            },
          } as any),
      } as ICepServices,
      new RedisCacheFakeProvider(),
    );
    const response2 = await cepBusiness.getAddress2('14050360');
    expect(response2.cep).toBe('14050300');
  });

  it('should not be able address', async () => {
    const cepBusiness = new CepBusiness(
      {
        getAddress: async data =>
          ({
            success: data === '14050300',
          } as any),
      } as ICepServices,
      new RedisCacheFakeProvider(),
    );

    await expect(cepBusiness.getAddress('00000000')).rejects.toBeInstanceOf(Error);
    await expect(cepBusiness.getAddress2('00000000')).rejects.toBeInstanceOf(Error);
  });

  it('should not be able get address with invalid cep', async () => {
    mockValid = false;
    const cepBusiness = new CepBusiness(
      {
        isValid: (data: any) => false,
        clearedValue: (data: any) => data,
        getAddress: async data =>
          ({
            success: data === '14050300',
          } as any),
      } as ICepServices,
      new RedisCacheFakeProvider(),
    );

    await expect(cepBusiness.getAddress('00000000')).rejects.toBeInstanceOf(Error);
    await expect(cepBusiness.getAddress2('00000000')).rejects.toBeInstanceOf(Error);
  });
});
