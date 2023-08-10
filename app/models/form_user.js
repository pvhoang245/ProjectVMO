'use strict';
const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Form_User = sequelize.define("form_users", {
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4
        },
        status: {
            type: DataTypes.STRING
        },
        managerCmt: {
            type: DataTypes.STRING
        },
        userCmt: {
            type: DataTypes.STRING
        },
        userId: {
            type: DataTypes.UUID
        },
        formId: {
            type: DataTypes.UUID
        }
    }, {
        timestamps: false,
    });

    return Form_User;
};