import { AxiosInstance } from 'axios';
import api from '@App/api';
import { ICepServices, IResponseDTO, IResponseErrorApiDTO, IResponseSuccessDTO } from './Cep.interfaces';

/**
 * classe de requisição a api de cep
 * @class CepServices
 */
class CepServices implements ICepServices {
  protected api: AxiosInstance;

  constructor() {
    this.api = api;
  }

  /**
   * recupera o dendereço do cep
   * @param cep
   */
  public async getAddress(cep: string) {
    try {
      const response = await this.api.get<IResponseErrorApiDTO | IResponseSuccessDTO>(`/${cep}/json/unicode/`);
      if (!(response.data as IResponseErrorApiDTO).erro) {
        return {
          success: true,
          data: response.data,
        } as IResponseDTO;
      }
    } catch (e) {
      if (e.response.status !== 400) {
        throw e;
      }
      return {
        success: false,
        data: {
          erro: 'Houve um erro na requisição tente novamente mais tarde!',
        },
      };
    }
    return {
      success: false,
      data: {
        erro: 'Não foi possível encontrar um resultado',
      },
    };
  }
}
export default CepServices;
