const api = require('express').Router();
//const db = require('../db')
const { Campus, Student } = require('../db/models');

api.param('studentId', (req, res, next, id) =>
    Student.findById(id,{
        include: [Campus]
    })
        .then(foundStudent => {
            if (!foundStudent) {
                const err = Error('Student not found');
                err.status = 404;
                throw err
            }
            req.student = foundStudent
            next()
            return null
        })
        .catch(next)
)

// - all students
api.get('/', (req, res, next) =>
    Student.findAll({
        include:[Campus]
    })
        .then(students => res.json(students))
        .catch(next)
)
// - a student by id
api.get('/:studentId', (req, res) =>

    res.json(req.student)
       
)

// POST
// - new student
api.post('/', (req, res, next) =>{
console.log(req.body)
    Campus.findOne({
        where: {
            id: req.body.campusId
        }
    })
    .then(campus => 
           
            Student.create(req.body)
                .then(student => {
                    student.setCampus(campus)
                })
                .then(student => res.json(student))
                .catch(next) 
                
         )
        }
)

// PUT
// - updated student info for one student
api.put('/:studentId', (req, res, next) =>
    req.student.update(req.body)
        .then(student => res.status(201).json(student))
        .catch(next)
)
// DELETE
// - a student
api.delete('/:studentId', (req, res, next) =>

    req.student.destroy()
        .then(() => res.status(204).end())
        .catch(next)

)

module.exports = api