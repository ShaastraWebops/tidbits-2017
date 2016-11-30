'use strict';

var express = require('express');
var controller = require('./answer.controller');
import auth from '../../auth/auth.service';

var router = express.Router();

router.post('/:id', auth.isAuthenticated(), controller.verify);
router.post('/:id/2', auth.isAuthenticated(), controller.verify2);
router.post('/:id/3', auth.isAuthenticated(), controller.verify3);

module.exports = router;
