const express = require('express');

const apiController = require('../controllers/api');
const userController = require('../controllers/user');

const router = express.Router();

router.route('/login')
    .get(userController.login)
    .post(userController.checkLogin);

router.route('/signup')
    .get(userController.register)
    .post(userController.registerSave);

router.get('/logout', userController.logout);

router.use(apiController.notFoundResource);

module.exports = router;