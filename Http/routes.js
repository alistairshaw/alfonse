import express from 'express';
import * as CitizenController from './Controllers/CitizenController';

let router = express.Router();

router.get('/', function(req, res) {
    res.render('index');
});

router.get('/api/citizen', CitizenController.index);

module.exports = router;