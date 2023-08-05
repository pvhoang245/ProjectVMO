'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Role_Url extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Role_Url.belongsTo(models.Role, {
                foreignKey: 'roleId'
            });
            Role_Url.belongsTo(models.Url, {
                foreignKey: 'urlId'
            });
        }
    }
    Role_Url.init({
        roleId: DataTypes.INTEGER,
        urlId: DataTypes.INTEGER,
    }, {
        sequelize,
        timestamps: false,
        modelName: 'Role_Url',
    });
    return Role_Url;
};