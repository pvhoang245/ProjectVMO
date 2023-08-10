'use strict';
const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Form = sequelize.define("forms", {
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4
        },
        name: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        },
        date: {
            type: DataTypes.DATE
        },
        duedate: {
            type: DataTypes.DATE
        },
        categoryId: {
            type: DataTypes.UUID
        }
    }, {
        timestamps: false,
    });

    return Form;
};