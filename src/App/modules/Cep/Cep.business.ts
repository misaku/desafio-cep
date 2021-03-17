import { inject, injectable } from 'tsyringe';
import * as JSON5 from 'json5';
import AppError from '@errors/AppError';
import { ICacheProvider } from '@provider/cache/cache.provider.interfaces';
import Cep from './Cep';
import { ICepBusiness, ICepServices, IResponseSuccessDTO } from './Cep.interfaces';

@injectable()
class CepBusiness implements ICepBusiness {
  constructor(
    @inject('CepServices')
    private service: ICepServices,
    @inject('RedisCacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  public async getAddress(cepValue: string) {
    if (Cep.isValid(cepValue)) {
      let cep = Cep.clearedValue(cepValue);
      let stopGetAddress = false;
      let responseData = {} as IResponseSuccessDTO;
      while (!stopGetAddress) {
        if (cep !== '00000000') {
          // eslint-disable-next-line no-await-in-loop
          const cachedResponse = await this.cacheProvider.recover(cep);
          if (cachedResponse) {
            return JSON5.parse(cachedResponse);
          }
          // eslint-disable-next-line no-await-in-loop
          const response = await this.service.getAddress(cep);
          if (response.success) {
            stopGetAddress = true;
            responseData = response.data as IResponseSuccessDTO;
          } else {
            cep = Cep.possibleNewCep(cep);
          }
        } else {
          stopGetAddress = true;
          throw new AppError('Não foi possivel encontrar um resultado');
        }
      }
      await this.cacheProvider.save(cep, JSON5.stringify(responseData));
      return responseData;
    }
    throw new AppError('Cep Inaválido');
  }

  public async getAddress2(cepValue: string): Promise<IResponseSuccessDTO> {
    if (Cep.isValid(cepValue)) {
      const cep = Cep.clearedValue(cepValue);
      const cachedResponse = await this.cacheProvider.recover(cep);
      if (cachedResponse) {
        return JSON5.parse(cachedResponse);
      }
      if (cep !== '00000000') {
        const response = await this.service.getAddress(cep);
        if (response.success) {
          await this.cacheProvider.save(cep, JSON5.stringify(response.data));
          return response.data as IResponseSuccessDTO;
        }
        return (await this.getAddress2(Cep.possibleNewCep(cep))) as IResponseSuccessDTO;
      }
      throw new AppError('Não foi possivel encontrar um resultado');
    }
    throw new AppError('Cep Inaválido');
  }
}
export default CepBusiness;
