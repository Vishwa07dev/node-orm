/**
 * this module will contain the information about Student schema
 * 
 * This will be used to create table in RDBMS
 */

const Sequelize = require("sequelize");
const sequelize = require("../utils/database");

const Student = sequelize.define('student', {
    id: {

        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true

    },
    name: {
        type: Sequelize.STRING,
        allowull: false

    },
    email: {
        type: Sequelize.STRING,
        allowNull: false

    }
});

module.exports = Student;