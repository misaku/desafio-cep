import UserBusiness from '../User.business';
import UserFakeRepository from './fakes/User.fake.repository';
import AppError from '../../../../errors/AppError';

describe('UserBusiness', () => {
  it('should be create a user', async () => {
    const userBusiness = new UserBusiness(new UserFakeRepository());
    const user = await userBusiness.createUser({
      name: 'usuario 1',
      email: 'usuario@teste.com',
      password: '123',
    });
    expect(user.id).toBeTruthy();
    expect(user.name).toEqual('usuario 1');
    expect(user.password).not.toEqual('123');
  });

  it('should not be create a user with same email', async () => {
    const userRepository = new UserFakeRepository();
    const existUser = await userRepository.create({
      name: 'usuario 1',
      email: 'usuario@teste.com',
      password: '123',
    });
    const isExistUser = await userRepository.findByIdAndEmail(existUser.id, existUser.email);
    const userBusiness = new UserBusiness(userRepository);

    expect(isExistUser).toBeTruthy();
    await expect(
      userBusiness.createUser({
        name: 'usuario 1',
        email: 'usuario@teste.com',
        password: '123',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
