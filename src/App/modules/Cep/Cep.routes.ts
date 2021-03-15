import * as Hapi from '@hapi/hapi';
import { container } from 'tsyringe';
import CepSchema from './Cep.schema';
import CepController from './Cep.controller';

export default (server: Hapi.Server) => {
  const controller = container.resolve(CepController);
  server.bind(controller);
  server.route([
    {
      method: 'GET',
      path: '/cep/{cepValue}',
      options: {
        auth: {
          mode: 'required',
        },
        handler: controller.show,
        description: 'Find',
        notes: 'Retora endereço do CEP',
        tags: ['api', 'CEP'], // ADD THIS TAG
        validate: CepSchema.show(),
      },
    },
    {
      method: 'GET',
      path: '/cep2/{cepValue}',
      options: {
        auth: {
          mode: 'required',
        },
        handler: controller.show2,
        description: 'Find',
        notes: 'Retora endereço do CEP',
        tags: ['api', 'CEP'], // ADD THIS TAG
        validate: CepSchema.show(),
      },
    },
  ]);
};
