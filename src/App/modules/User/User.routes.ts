import * as Hapi from '@hapi/hapi';
import UserController from './User.controller';
import UserBusiness from './User.business';
import UserSchema from './User.schema';
import UserRepository from './User.repository';

export default (server: Hapi.Server) => {
  const controller = new UserController(new UserBusiness(new UserRepository()));
  server.bind(controller);
  server.route([
    {
      method: 'POST',
      path: '/user',
      options: {
        auth: {
          mode: 'optional',
        },
        handler: controller.store,
        description: 'Endpoint de Criação de Usuário',
        notes: 'Cria Usuário',
        tags: ['api', 'User'],
        validate: UserSchema.store(),
      },
    },
  ]);
};
