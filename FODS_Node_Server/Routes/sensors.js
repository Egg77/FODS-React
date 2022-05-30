const express = require('express');
const router = express.Router();
const sensors = require('../services/sensors');

router.get('/', async function(req, res, next) {

    try { 
        res.json(await sensors.getMultiple(req.query.page));   
    } catch (err) {
        console.error('Error retrieving sensor list ', err.message);
        next(err);
    }
});

router.get('/:id', async function(req, res, next) {

    try {
        res.json(await sensors.getSingle(req.params.id));
    } catch (err) {
        console.error('Error retrieving ID ', err.message);
        next(err);
    }
});

router.put('/:id', async function (req, res, next) {

    try {
        res.json(await sensors.update(req.params.id, req.body));
    } catch (err) {
        console.error('Error updating sensor ', err.message)
        next(err)
    }
});


module.exports = router;