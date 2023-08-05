'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Form extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Form.belongsTo(models.Category, {
                foreignKey: "categoryId"
            });
            Form.belongsToMany(models.User, {
                through: 'Form_User',
                foreignKey: 'formId'
            })
        }
    }
    Form.init({
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        date: DataTypes.DATE,
        duedate: DataTypes.DATE,
        categoryId: DataTypes.INTEGER
    }, {
        sequelize,
        timestamps: false,
        modelName: 'Form',
    });
    return Form;
};