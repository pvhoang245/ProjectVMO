'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Form_User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Form_User.hasMany(models.Form_User_Detail);
            Form_User.belongsTo(models.User, {
                foreignKey: 'userId'
            });
            Form_User.belongsTo(models.Form, {
                foreignKey: 'formId'
            });
        }
    }
    Form_User.init({
        status: DataTypes.STRING,
        managerCmt: DataTypes.STRING,
        userCmt: DataTypes.STRING,
        userId: DataTypes.INTEGER,
        formId: DataTypes.INTEGER
    }, {
        sequelize,
        timestamps: false,
        modelName: 'Form_User',
    });
    return Form_User;
};