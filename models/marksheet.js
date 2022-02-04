/**
 * this module will contain the information about Marhsheet schema
 * 
 * This will be used to create table in RDBMS
 */

const Sequelize = require("sequelize");
const sequelize = require("../utils/database");


const Marksheet = sequelize.define('marksheet', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true

    },
    marks: {
        type: Sequelize.INTEGER,
        allowull: false

    }
});

module.exports = Marksheet;