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



// const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize('test', 'root', null, {
//     host: 'localhost',
//     dialect: 'mysql'
// });

// const connection = async() => {
//     try {
//         // sequelize.sync({ force: true }).then(() => {
//         //     console.log('Cơ sở dữ liệu đã được đồng bộ hóa.');
//         // });
//         await sequelize.authenticate();
//         console.log('Connection has been established successfully.');
//     } catch (error) {
//         console.error('Unable to connect to the database:', error);
//     }
// }


// module.exports = connection;