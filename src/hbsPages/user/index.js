const express = require('express');
const router = express.Router();
const controller = require('./user.controller');

router.get('/add', controller.addUser);
router.get('/edit', controller.editUser);
router.get('/', controller.getUsers);

module.exports = router;    