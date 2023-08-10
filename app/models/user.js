'use strict';
const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("users", {
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4
        },
        name: {
            type: DataTypes.STRING
        },
        birthday: {
            type: DataTypes.STRING
        },
        address: {
            type: DataTypes.STRING
        },
        image: {
            type: DataTypes.STRING
        },
        sex: {
            type: DataTypes.STRING
        },
        bhxh: {
            type: DataTypes.STRING
        },
        phone: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        managerId: {
            type: DataTypes.UUID
        },
        accountId: {
            type: DataTypes.UUID
        },
        roleId: {
            type: DataTypes.UUID
        }
    }, {
        timestamps: false,
    });

    return User;
};