'use strict';

const listItemTable = (sequelize, DataTypes) =>
  sequelize.define('listItem', {
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    assignee: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    complete: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    difficulty: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

module.exports = listItemTable;
