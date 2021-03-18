import Joi from 'joi';

/**
 * validação dos parametros da rota de cep
 */
class CepSchema {
  public static show() {
    return {
      params: Joi.object({
        cepValue: Joi.string().required().example('14050360').description('Cep do endereço'),
      }),
    };
  }
}

export default CepSchema;
