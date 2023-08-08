'use strict';
const {
    Model,
    DataTypes,
    Deferrable
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            User.hasMany(models.Form_User);
            User.belongsTo(models.Account, {
                foreignKey: "accountId"
            });
            User.belongsTo(models.Role, {
                foreignKey: "roleId"
            });
            User.belongsToMany(models.Form, {
                through: 'Form_User',
                foreignKey: 'userId'
            })
        }
    }
    User.init({
        name: DataTypes.STRING,
        birthday: DataTypes.STRING,
        address: DataTypes.STRING,
        sex: DataTypes.STRING,
        image: DataTypes.STRING,
        bhxh: DataTypes.STRING,
        phone: DataTypes.STRING,
        email: DataTypes.STRING,
        accountId: DataTypes.INTEGER,
        roleId: DataTypes.INTEGER,
        managerId: DataTypes.INTEGER,
    }, {
        sequelize,
        timestamps: false,
        modelName: 'User',
    });
    return User;
};