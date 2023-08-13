module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "",
    DB: "test",
    dialect: "mysql",
    pool: {
        max: 7,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};