import UserFakeRepository from '@modules/User/tests/fakes/User.fake.repository';
import AuthBusiness from '@modules/Auth/Auth.business';

jest.mock('bcryptjs', () => {
  const actualModule = jest.requireActual('bcryptjs');
  return {
    ...actualModule,
    compare: (txt: string, hash: string) => txt === hash,
  };
});

describe('AuthBusiness', () => {
  it('should be authenticate', async () => {
    const repository = new UserFakeRepository();
    await repository.create({
      name: 'user teste',
      email: 'user@teste.com',
      password: '123',
    });
    const authBusiness = new AuthBusiness(repository);
    const response = await authBusiness.store({ email: 'user@teste.com', password: '123' });
    expect(response.token).toBeTruthy();
  });
  it('should not be authenticate with wrong email', async () => {
    const repository = new UserFakeRepository();
    await repository.create({
      name: 'user teste',
      email: 'user@teste.com',
      password: '123',
    });
    const authBusiness = new AuthBusiness(repository);
    await expect(authBusiness.store({ email: 'userx@teste.com', password: '123' })).rejects.toBeInstanceOf(Error);
  });
  it('should not be authenticate with wrong password', async () => {
    const repository = new UserFakeRepository();
    await repository.create({
      name: 'user teste',
      email: 'user@teste.com',
      password: '123',
    });
    const authBusiness = new AuthBusiness(repository);
    await expect(authBusiness.store({ email: 'user@teste.com', password: '1234' })).rejects.toBeInstanceOf(Error);
  });
});
