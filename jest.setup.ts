import 'reflect-metadata';
import dotenv from 'dotenv';
import fs from 'fs';

const path = './.env.dev';
let config;
try {
  if (fs.existsSync(path)) {
    console.log('--------------USANDO ENV TEST--------------');
    config = { path };
  }
} catch (err) {
  console.log('--------------USANDO ENV DEV--------------');
}

dotenv.config(config);
