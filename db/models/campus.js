'use strict';

const Sequelize = require('sequelize');
const db = require('../index.js')
const Student = require('./student')


const Campus = db.define('campus', {
    name: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    imageurl: {
        type: Sequelize.STRING
    }
})

Campus.hook('beforeDestroy', function (campus) {
    return Student.destroy({
      where: {campusId: campus.id},
    })
    
  });

module.exports=Campus