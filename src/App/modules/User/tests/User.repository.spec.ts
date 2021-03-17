import { Repository } from 'typeorm';
import { mock } from 'jest-mock-extended';
import User from '@DataBase/entity/User';
import UserRepository from '../User.repository';

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

describe('UserRepository', () => {
  it('should be create user', async () => {
    const userRepository = new UserRepository();
    await userRepository.create({
      name: 'usuario',
      email: 'usuario@test.com',
      password: '123',
    });

    expect(repoMock.create).toBeCalledWith({
      name: 'usuario',
      email: 'usuario@test.com',
      password: '123',
    });
  });
  it('should be find by email', async () => {
    const userRepository = new UserRepository();
    await userRepository.findByEmail('usuario@test.com');

    expect(repoMock.findOne).toBeCalledWith({
      where: {
        email: 'usuario@test.com',
      },
    });
  });
  it('should be find by id and email', async () => {
    const userRepository = new UserRepository();
    await userRepository.findByIdAndEmail('123', 'usuario@test.com');

    expect(repoMock.findOne).toBeCalledWith({
      where: {
        email: 'usuario@test.com',
        id: '123',
      },
    });
  });
});
