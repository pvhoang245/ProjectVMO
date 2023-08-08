'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Url extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Url.hasMany(models.Role_Url);
            Url.belongsToMany(models.Role, {
                through: "Role_Url",
                foreignKey: 'urlId'
            })
        }
    }
    Url.init({
        link: DataTypes.STRING,
        description: DataTypes.STRING,
    }, {
        sequelize,
        timestamps: false,
        modelName: 'Url',
    });
    return Url;
};