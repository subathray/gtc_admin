const express = require('express');
const router = express.Router();
const controller = require('./admin.controller');

router.get('/add', controller.addAdmin);
router.get('/edit', controller.addAdmin);
router.get('/', controller.getAdmins);

module.exports = router;
