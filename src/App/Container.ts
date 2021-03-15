import { container } from 'tsyringe';

import { IUserRepository } from './modules/User/User.interfaces';
import UserRepository from './modules/User/User.repository';
import UserBusiness from './modules/User/User.business';
import AuthBusiness from './modules/Auth/Auth.business';
import CepServices from './modules/Cep/Cep.services';
import CepBusiness from './modules/Cep/Cep.business';
import HealthBusiness from './modules/Health/Health.business';

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);
container.registerSingleton('UserBusiness', UserBusiness);
container.registerSingleton('AuthBusiness', AuthBusiness);
container.registerSingleton('CepServices', CepServices);
container.registerSingleton('CepBusiness', CepBusiness);
container.registerSingleton('HealthBusiness', HealthBusiness);
