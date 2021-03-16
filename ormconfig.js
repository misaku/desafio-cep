require('dotenv').config();
module.exports = {
    "type": process.env.DB_TYPE,
    "host": process.env.DB_HOST,
    "port": process.env.DB_PORT,
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "synchronize": true,
    "logging": false,
    "entities": [
        "./src/DataBase/entity/**/*.ts"
    ],
    "migrations": [
        "./src/DataBase/migration/**/*.ts"
    ],
    "subscribers": [
        "./src/DataBase/subscriber/**/*.ts"
    ],
    "cli": {
        "entitiesDir": "./src/DataBase/entity",
        "migrationsDir": "./src/DataBase/migration",
        "subscribersDir": "./src/DataBase/subscriber"
    }
}
