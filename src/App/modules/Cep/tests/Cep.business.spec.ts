import CepBusiness from '../Cep.business';
import { ICepServices } from '../Cep.interfaces';

let mockValid = true;
jest.mock('../Cep', () => ({
  isValid: (data: string) => mockValid,
  clearedValue: (data: string) => data,
  possibleNewCep: (data: string) => '14050300',
}));
describe('CepBusiness', () => {
  it('should be able address in first time', async () => {
    const cepBusiness = new CepBusiness({
      getAddress: async data =>
        ({
          success: true,
          data: {
            cep: '14050360',
          },
        } as any),
    } as ICepServices);
    const response1 = await cepBusiness.getAddress('14050360');
    const response2 = await cepBusiness.getAddress2('14050360');
    expect(response1.cep).toBe(response2.cep);
    expect(response1.cep).toBe('14050360');
  });
  it('should be able address in second time', async () => {
    const cepBusiness = new CepBusiness({
      getAddress: async data =>
        ({
          success: data === '14050300',
          data: {
            cep: '14050300',
          },
        } as any),
    } as ICepServices);
    const response1 = await cepBusiness.getAddress('14050360');
    const response2 = await cepBusiness.getAddress2('14050360');
    expect(response1.cep).toBe(response2.cep);
    expect(response1.cep).toBe('14050300');
  });

  it('should not be able address', async () => {
    const cepBusiness = new CepBusiness({
      getAddress: async data =>
        ({
          success: data === '14050300',
        } as any),
    } as ICepServices);

    await expect(cepBusiness.getAddress('00000000')).rejects.toBeInstanceOf(Error);
    await expect(cepBusiness.getAddress2('00000000')).rejects.toBeInstanceOf(Error);
  });

  it('should not be able address with invalid cep', async () => {
    mockValid = false;
    const cepBusiness = new CepBusiness({
      isValid: (data: any) => false,
      clearedValue: (data: any) => data,
      getAddress: async data =>
        ({
          success: data === '14050300',
        } as any),
    } as ICepServices);

    await expect(cepBusiness.getAddress('00000000')).rejects.toBeInstanceOf(Error);
    await expect(cepBusiness.getAddress2('00000000')).rejects.toBeInstanceOf(Error);
  });
});
