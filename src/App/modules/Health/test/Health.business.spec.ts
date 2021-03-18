import { Repository } from 'typeorm';
// eslint-disable-next-line import/no-extraneous-dependencies
import { mock } from 'jest-mock-extended';
import User from '@DataBase/entity/User';
import HealthBusiness from '../Health.business';

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

describe('HealthBusiness', () => {
  it('database is OK', async () => {
    const healthBusiness = new HealthBusiness();
    const response = await healthBusiness.getHealth();
    expect(repoMock.findOne).toHaveBeenCalled();
    expect(response.database.status).toEqual('OK');
  });
  it('database is not OK', async () => {
    repoMock.findOne.mockRejectedValue(new Error('no database'));
    const healthBusiness = new HealthBusiness();
    const response = await healthBusiness.getHealth();
    expect(repoMock.findOne).toHaveBeenCalled();
    expect(response.database.status).toEqual('ERROR');
  });
});
