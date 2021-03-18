import Joi from 'joi';

/**
 * validação do payload de login
 */
class AuthSchema {
  public static store() {
    return {
      payload: Joi.object({
        email: Joi.string().required().example('usuario@email.com').description('Cep do usuário'),
        password: Joi.string().required().example('123456').description('senha do usuário'),
      }),
    };
  }
}

export default AuthSchema;
