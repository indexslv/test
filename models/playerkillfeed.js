'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PlayerKillFeed extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PlayerKillFeed.init({
    server_id: DataTypes.INTEGER,
    killer_steamId: DataTypes.INTEGER,
    killer_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'PlayerKillFeed',
  });
  return PlayerKillFeed;
};