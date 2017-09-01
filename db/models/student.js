'use strict';

const Sequelize = require('sequelize')
const db = require('../index.js')

const Student = db.define('student', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    email: {
        type: Sequelize.STRING,
        unique: true,
        validate: {
            isEmail: true,
            notEmpty: true
        }
    }
    
} 

)
module.exports = Student
