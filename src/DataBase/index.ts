import { createConnection } from 'typeorm';
import EnvironmentConfig from '@src/Environment.config';

export default async (execute: () => void) => {
  const { dbName, host, password, port, type, user } = EnvironmentConfig.database;
  try {
    await createConnection({
      type,
      host,
      port,
      username: user,
      password,
      database: dbName,
      synchronize: true,
      logging: false,
      entities: ['./src/DataBase/entity/**/*{.ts,.js}'],
      migrations: ['./src/DataBase/migration/**/*{.ts,.js}'],
      subscribers: ['./src/DataBase/subscriber/**/*{.ts,.js}'],
    } as any);
  } catch (e) {
    console.error('Não foi possivel conectar ao banco de dados');
  }
  execute();
};
