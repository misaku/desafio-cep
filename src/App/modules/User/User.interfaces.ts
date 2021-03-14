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

export interface IRequestUserDto {
  name: string;
  email: string;
  password: string;
}
