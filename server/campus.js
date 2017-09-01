const api = require('express').Router();
//const db = require('../db')
const { Campus, Student } = require('../db/models');


api.param('campusId', (req, res, next, theCampusId) =>
    Campus.findById(theCampusId)
        .then(foundCampus => {
            if (!foundCampus) {
                const err = Error('Campus not found');
                err.status = 404;
                throw err
            }
            req.campus = foundCampus
            next()
            return null
        })
        .catch(next)
)


// GET
// - all campuses
api.get('/', (req, res, next) =>
    Campus.findAll()
        .then(campuses => res.json(campuses))
        .catch(next)
)

// - a campus by id
api.get('/:campusId', (req, res) =>
    res.json(req.campus)
)

// POST
// - new campus
api.post('/', (req, res, next) =>
    Campus.create(req.body)
        .then(campus => res.json(campus))
        .catch(next)
)

// PUT
// - updated campus info for one campus
api.put('/:campusId', (req, res, next) =>
    req.campus.update(req.body)
        .then(campus => res.status(201).json(campus))
        .catch(next)
)


// DELETE
// - a campus
api.delete('/:campusId', (req, res, next) =>
    req.campus.destroy()
        .then(() => res.status(204).end())
        .catch(next)
)

module.exports = api