const express = require('express');

const errorController = require('../controllers/404');
const userController = require('../controllers/user');

const router = express.Router();

router.route('/test')
    .get(userController.test);

router.route('/login')
    .post(userController.checkLogin);

router.get('/logout', userController.logout);

router.route('/profile/parent/:id/info')
    .patch(userController.updateUser);

router.route('/profile/parent/:id')
    .patch(userController.updatePassword)

router.use(errorController.notFoundResource);

module.exports = router;