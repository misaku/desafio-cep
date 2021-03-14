import axios from 'axios';
import Cep from './Cep';

class CepBusiness {
  public async getAddress(cepValue) {
    if (!Cep.isValid(cepValue)) {
      throw new Error('Cep Inaválido');
    }
    let cep = Cep.clearedValue(cepValue);
    let stopGetAddres = false;
    while (!stopGetAddres) {
      if (cep !== '00000000') {
        try {
          const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/unicode/`);
          if (response.status === 200) {
            if (!response.data.erro) {
              stopGetAddres = true;
              return response.data;
            }
            cep = Cep.possibleNewCep(cep);
          }
        } catch (e) {
          return {
            erro: 'Houve um erro na requisição tente novamente mais tarde!',
          };
        }
      } else {
        stopGetAddres = true;
        return {
          erro: 'Não foi possivel encontrar um resultado',
        };
      }
    }
  }
}
export default CepBusiness;
