import axios, { AxiosInstance } from 'axios';
import { CepServicesDTO, ResponseDTO, ResponseErrorApiDTO, ResponseSuccessDTO } from './Cep.interfaces';

class CepServices implements CepServicesDTO {
  protected api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: 'https://viacep.com.br/ws',
    });
  }

  public async getAddress(cep: string) {
    try {
      const response = await this.api.get<ResponseErrorApiDTO | ResponseSuccessDTO>(`/${cep}/json/unicode/`);
      if (response.status === 200) {
        if (!(response.data as ResponseErrorApiDTO).erro) {
          return {
            success: true,
            data: response.data,
          } as ResponseDTO;
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
        erro: 'Não foi possivel encontrar um resultado',
      },
    };
  }
}
export default CepServices;
