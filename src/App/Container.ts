import { container } from 'tsyringe';

/**
 * DOCUMENTO DE IMPORTAÇÃO DE INGECAO DE DEPENDENDCIAS
 */

import { IUserBusiness, IUserRepository } from '@modules/User/User.interfaces';
import { IAuthBusiness } from '@modules/Auth/Auth.interfaces';
import { ICepBusiness, ICepServices } from '@modules/Cep/Cep.interfaces';
import { IHealthBusiness } from '@modules/Health/Health.interfaces';
import { ICacheProvider } from '@provider/cache/cache.provider.interfaces';

import UserRepository from '@modules/User/User.repository';
import UserBusiness from '@modules/User/User.business';
import AuthBusiness from '@modules/Auth/Auth.business';
import CepServices from '@modules/Cep/Cep.services';
import CepBusiness from '@modules/Cep/Cep.business';
import HealthBusiness from '@modules/Health/Health.business';
import RedisCacheProvider from '@provider/cache/RedisCache.provider';

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);
container.registerSingleton<IUserBusiness>('UserBusiness', UserBusiness);
container.registerSingleton<IAuthBusiness>('AuthBusiness', AuthBusiness);
container.registerSingleton<ICepServices>('CepServices', CepServices);
container.registerSingleton<ICepBusiness>('CepBusiness', CepBusiness);
container.registerSingleton<IHealthBusiness>('HealthBusiness', HealthBusiness);
container.registerSingleton<ICacheProvider>('RedisCacheProvider', RedisCacheProvider);
