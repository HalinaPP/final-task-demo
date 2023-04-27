const Sequelize = require('sequelize');
const {sequelize} = require('../../db/index');
const { UUIDV4 } = require('sequelize');

// check SequelizeUniqueConstraintError, ValidationError
const User = sequelize.define(
  'User',
  {
    id: {
      type: Sequelize.DataTypes.UUID,
      primaryKey: true,
      unique: true,
      defaultValue: UUIDV4,
      validate: {
        isUUID: 4,
      },
    },
    login: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = { User }