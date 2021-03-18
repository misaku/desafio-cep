// eslint-disable-next-line import/no-extraneous-dependencies
import { mock } from 'jest-mock-extended';
import { Repository } from 'typeorm';
import App from '@App/index';
import User from '@DataBase/entity/User';

import '@App/test/Container';

jest.mock('@DataBase/entity/User', jest.fn());

const repoMock = mock<Repository<User>>();

jest.mock('typeorm', () => {
  return {
    getRepository: () => repoMock,
    PrimaryGeneratedColumn: () => {},
    Column: () => {},
    Entity: () => {},
  };
});

const FactoryServer = new App();
const server = FactoryServer.getServer();

beforeAll(async done => {
  await FactoryServer.start(true);
  done();
}, 30000);

afterAll(async done => {
  await server.stop();
  done();
}, 30000);

describe('teste route User', () => {
  it('return 200 status OK', async () => {
    const options = {
      method: 'POST',
      url: `/user`,
      payload: {
        name: 'usuario',
        email: 'usuario@teste.com',
        password: '123',
      },
    };
    const response = await server.inject(options);
    expect(response.statusCode).toEqual(201);
  });
});
