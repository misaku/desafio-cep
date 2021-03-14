import Inert from '@hapi/inert';
import Vision from '@hapi/vision';
import HapiSwagger from 'hapi-swagger';
import * as Hapi from '@hapi/hapi';

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
  const people = {
    1: {
      id: 1,
      name: 'LuizaLabs',
    },
  };
  const validate = async decoded => {
    if (!people[decoded.id]) {
      return { isValid: false };
    }
    return { isValid: true };
  };
  server.auth.strategy('jwt', 'jwt', {
    key: 'BuscaCep-LuizaLabs',
    validate,
    verifyOptions: { ignoreExpiration: true },
  });

  server.auth.default('jwt');
};
