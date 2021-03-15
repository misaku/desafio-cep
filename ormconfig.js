module.exports = {
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "root",
    "password": "123456",
    "database": "buscacep",
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
