'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Form_User_Detail extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Form_User_Detail.belongsTo(models.Form_User, {
                foreignKey: "formUserId"
            });
        }
    }
    Form_User_Detail.init({
        description: DataTypes.STRING,
        score: DataTypes.INTEGER,
        formUserId: DataTypes.INTEGER
    }, {
        sequelize,
        timestamps: false,
        modelName: 'Form_User_Detail',
    });
    return Form_User_Detail;
};