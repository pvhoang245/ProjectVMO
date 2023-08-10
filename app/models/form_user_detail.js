'use strict';
const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Form_User_Detail = sequelize.define("form_user_details", {
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4
        },
        description: {
            type: DataTypes.STRING
        },
        score: {
            type: DataTypes.INTEGER
        },
        formUserId: {
            type: DataTypes.UUID
        }
    }, {
        timestamps: false,
    });

    return Form_User_Detail;
};