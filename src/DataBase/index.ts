import { createConnection } from 'typeorm';

export default async (execute: () => void) => {
  try {
    await createConnection();
  } catch (e) {
    console.error('Não foi possivel conectar ao banco de dados');
  }
  execute();
};
