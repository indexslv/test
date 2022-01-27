'use strict';

const {
  Model, 
  DataTypes
} = require('sequelize');

class PlayerKillFeed extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  
}

module.exports = (sequelize) => {
  
  return PlayerKillFeed.init({
    server_id: DataTypes.INTEGER,
    killer_steamId: DataTypes.INTEGER,
    killer_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'PlayerKillFeed',
  });
};