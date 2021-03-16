import {Request, ResponseToolkit} from '@hapi/hapi';
import User from '../../../DataBase/entity/User';

export interface ICreateUserDTO {
  name: string;
  email: string;
  password: string;
}

export interface IUserRepository {
  findByEmail(email: string): Promise<User | undefined>;

  findByIdAndEmail(id: string, email: string): Promise<User | undefined>;

  create(data: ICreateUserDTO): Promise<User>;
}

export interface IUserBusiness {
  createUser(data: ICreateUserDTO): Promise<User>;
}

export interface IUserController {
  store(data: Request, response: ResponseToolkit): Promise<any>;
}
