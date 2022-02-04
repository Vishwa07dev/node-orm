/**
 * This module will be used to create connection witht he MySQL database
 */
const Sequelize = require('sequelize');

//Creating the sequelize object - it needs : already created db name, username , password and other details
const sequelize = new Sequelize('sequelize_demo', 'root', 'Welcome1', {
    dialect: "mysql",
    host: "localhost"
});

module.exports = sequelize;