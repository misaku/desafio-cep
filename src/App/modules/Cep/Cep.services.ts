import axios, { AxiosInstance } from 'axios';

class CepServices {
  protected api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: 'https://viacep.com.br/ws',
    });
  }

  public async getAddress(cep: string) {
    try {
      const response = await this.api.get(`/${cep}/json/unicode/`);
      if (response.status === 200) {
        if (!response.data.erro) {
          return {
            success: true,
            response: response.data,
          };
        }
      }
    } catch (e) {
      return {
        success: false,
        response: {
          erro: 'Houve um erro na requisição tente novamente mais tarde!',
        },
      };
    }
    return {
      success: false,
      response: {
        erro: 'Não foi possivel encontrar um resultado',
      },
    };
  }
}
export default CepServices;
