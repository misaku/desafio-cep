import { Request, ResponseToolkit } from '@hapi/hapi';
import User from '@DataBase/entity/User';

export interface ICreateUserDTO {
  name: string;
  email: string;
  password: string;
}

/**
 * interface de repositorio de usuário
 */
export interface IUserRepository {
  /**
   * metodo de busca de usuário por email
   * @param email
   */
  findByEmail(email: string): Promise<User | undefined>;

  /**
   * metodo de busca de usuario por id e email
   * @param id
   * @param email
   */
  findByIdAndEmail(id: string, email: string): Promise<User | undefined>;

  /**
   * metodo de criar usuário
   * @param data
   */
  create(data: ICreateUserDTO): Promise<User>;
}

export interface IUserBusiness {
  createUser(data: ICreateUserDTO): Promise<User>;
}

export interface IUserController {
  store(data: Request, response: ResponseToolkit): Promise<any>;
}
