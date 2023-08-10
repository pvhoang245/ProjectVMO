'use strict';
const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Role_Url = sequelize.define("role_urls", {
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4
        },
        roleId: {
            type: DataTypes.UUID
        },
        urlId: {
            type: DataTypes.UUID
        }
    }, {
        timestamps: false,
    });

    return Role_Url;
};