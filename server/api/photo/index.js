'use strict';

var express = require('express');
var controller = require('./photo.controller');

var router = express.Router();

router.get('/gotcha', controller.received);
router.get('/sendEmail', controller.sendEmail);


module.exports = router;
