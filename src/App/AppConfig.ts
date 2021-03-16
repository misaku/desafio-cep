import Inert from '@hapi/inert';
import Vision from '@hapi/vision';
import HapiSwagger from 'hapi-swagger';
import * as Hapi from '@hapi/hapi';
import UserRepository from './modules/User/User.repository';

/**
 * Configuração do swagger
 * */
export const swaggerConfig = () => {
  const swaggerOptions = {
    info: {
      title: 'Busca CEP API',
      description: 'Busca CEP é uma api responsavel para buscar cep',
      version: '1.0.0',
    },
    securityDefinitions: {
      jwt: {
        type: 'apiKey',
        name: 'Authorization',
        in: 'header',
      },
    },
    documentationPath: '/doc',
    grouping: 'tags',
    security: [{ jwt: [] }],
  };
  return [
    Inert,
    Vision,
    {
      plugin: HapiSwagger,
      options: swaggerOptions,
    },
  ];
};

/**
 * Configuração simplificada do plugin de autenticação
 * */
export const autenticateConfig = (server: Hapi.Server) => {
  let validate = async (decoded: any) => {
    return { isValid: false };
  };
  try {
    const userReposirory = new UserRepository();
    validate = async (decoded: { email: any; id: any }) => {
      const user = userReposirory.findByIdAndEmail(decoded.id, decoded.email);
      if (!user) {
        return { isValid: false };
      }
      return { isValid: true };
    };
  } catch (e) {
    console.error('banco de dados indisponivel');
  }

  server.auth.strategy('jwt', 'jwt', {
    key: process.env.APP_SECRET,
    validate,
    verifyOptions: { ignoreExpiration: true },
  });

  server.auth.default('jwt');
};
