import { EntityRepository, Repository } from 'typeorm';

import User from '../../../DataBase/entity/User';

@EntityRepository(User)
class UserRepository extends Repository<User> {}

export default UserRepository;
