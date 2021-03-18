import { getRepository, Repository } from 'typeorm';

import User from '@DataBase/entity/User';
import { ICreateUserDTO, IUserRepository } from './User.interfaces';

/**
 * Classe de Repositorio de Usuário
 * @class UserRepository
 */
class UserRepository implements IUserRepository {
  private userRepository: Repository<User>;

  constructor() {
    this.userRepository = getRepository(User);
  }

  /**
   * procura um usuário através de um eamil
   * @param email
   */
  public async findByEmail(email: string): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { email } });
  }

  /**
   * procura um usuáro pelo email e id
   * @param id
   * @param email
   */
  public async findByIdAndEmail(id: string, email: string): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { email, id } });
  }

  /**
   * cria um usuário no banco
   * @param data
   */
  public async create(data: ICreateUserDTO): Promise<User> {
    const user = this.userRepository.create(data);
    await this.userRepository.save(user);
    return user;
  }
}

export default UserRepository;
