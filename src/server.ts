import 'reflect-metadata';
import dotenv from 'dotenv';
import './App/Container';
import DataBase from './DataBase';
import App from './App';

dotenv.config();

DataBase(() => {
  const server = new App();
  server.start();
});
