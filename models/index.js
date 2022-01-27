const Sequelize = require('sequelize');

const { DB_DIALECT,
    DB_HOSTNAME,
    DB_DATABASE,
    DB_USERNAME,
    DB_PASSWORD,
    DB_PORT, 
} = process.env;

const sequelize = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD,{
    host: DB_HOSTNAME,
    dialect: DB_DIALECT,
    port: DB_PORT,
});

sequelize.PlayerKillFeed = require('./playerkillfeed')(sequelize);

module.exports = sequelize;