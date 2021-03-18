import { createConnection } from 'typeorm';

export default async (execute: () => void) => {
  try {
    await createConnection({
      type: process.env.DB_TYPE,
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
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
