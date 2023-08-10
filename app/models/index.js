const dbConfig = require("../config/connect");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle,
    },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.account = require("./account")(sequelize, Sequelize);
db.category = require("./category")(sequelize, Sequelize);
db.user = require("./user")(sequelize, Sequelize);
db.form = require("./form")(sequelize, Sequelize);
db.role = require("./role")(sequelize, Sequelize);
db.url = require("./url")(sequelize, Sequelize);
db.role_url = require("./role_url")(sequelize, Sequelize);
db.form_user = require("./form_user")(sequelize, Sequelize);
db.form_user_detail = require("./form_user_detail")(sequelize, Sequelize);
////
db.account.hasOne(db.user);
db.user.belongsTo(db.account, {
    foreignKey: "accountId"
});
////
db.role.hasMany(db.user);
db.user.belongsTo(db.role, {
    foreignKey: "roleId"
});
////
db.user.belongsToMany(db.form, {
    through: 'form_users',
    foreignKey: 'userId'
});
db.form.belongsToMany(db.user, {
    through: 'form_users',
    foreignKey: 'formId'
});
db.form.hasMany(db.form_user);
db.form_user.belongsTo(db.form, {
    foreignKey: "formId"
});
db.user.hasMany(db.form_user);
db.form_user.belongsTo(db.user, {
    foreignKey: "userId"
});
////
db.url.belongsToMany(db.role, {
    through: "role_urls",
    foreignKey: 'urlId'
});
db.role.belongsToMany(db.url, {
    through: "role_urls",
    foreignKey: 'roleId'
});
db.role.hasMany(db.role_url);
db.role_url.belongsTo(db.role, {
    foreignKey: "roleId"
});
db.url.hasMany(db.role_url);
db.role_url.belongsTo(db.url, {
    foreignKey: "urlId"
});
////
db.category.hasMany(db.form);
db.form.belongsTo(db.category, {
    foreignKey: "categoryId"
});
////
db.form_user.hasMany(db.form_user_detail);
db.form_user_detail.belongsTo(db.form_user, {
    foreignKey: "formUserId"
});

module.exports = db;