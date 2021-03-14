import 'reflect-metadata';
import DataBase from './DataBase';
import App from './App';

DataBase(() => {
  const server = new App();
  server.start();
});
