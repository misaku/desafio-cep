import 'reflect-metadata';
import dotenv from 'dotenv';
import fs from 'fs';

const path = './.env.dev';
let config;
try {
  if (fs.existsSync(path)) {
    // USANDO ENV DE TESTE
    config = { path };
  }
} catch (err) {
  // USANDO ENV DE DESENVOLVIMENTO
}

dotenv.config(config);
