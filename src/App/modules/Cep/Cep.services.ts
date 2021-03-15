import { AxiosInstance } from 'axios';
import api from '../../api';
import { ICepServices, IResponseDTO, IResponseErrorApiDTO, IResponseSuccessDTO } from './Cep.interfaces';

class CepServices implements ICepServices {
  protected api: AxiosInstance;

  constructor() {
    this.api = api;
  }

  public async getAddress(cep: string) {
    try {
      const response = await this.api.get<IResponseErrorApiDTO | IResponseSuccessDTO>(`/${cep}/json/unicode/`);
      if (response.status === 200) {
        if (!(response.data as IResponseErrorApiDTO).erro) {
          return {
            success: true,
            data: response.data,
          } as IResponseDTO;
        }
      }
    } catch (e) {
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
