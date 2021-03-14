import Inert from '@hapi/inert';
import Vision from '@hapi/vision';
import HapiSwagger from 'hapi-swagger';
import * as Hapi from '@hapi/hapi';
import { getRepository } from 'typeorm';
import User from '../DataBase/entity/User';

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
  const userReposirory = getRepository(User);
  const validate = async (decoded: { email: any; id: any }) => {
    const user = userReposirory.findOne({
      where: {
        email: decoded.email,
        id: decoded.id,
      },
    });
    if (!user) {
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
