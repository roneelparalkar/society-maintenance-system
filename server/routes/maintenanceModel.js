const express = require('express');
const router = express.Router();
const dbConnector = require('../dbConnector.js');

router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now())
    next();
});

router.get('/', function (req, res) {
    res.send('Maintenance home page')
});

router.get('/about', function (req, res) {
    res.send('About Maintenance')
});

module.exports = router;