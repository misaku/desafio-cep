import * as Hapi from '@hapi/hapi';
import CepSchema from './Cep.schema';
import CepController from './Cep.controller';
import CepBusiness from './Cep.business';

export default (server: Hapi.Server) => {
  const controller = new CepController(new CepBusiness());
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
