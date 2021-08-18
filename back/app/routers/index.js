const express = require('express');

const errorController = require('../controllers/404');
const userController = require('../controllers/user');
// const adminController = require('../controllers/admin')

const router = express.Router();

router.route('/login')
    .get(userController.login)
    .post(userController.checkLogin);

// router.route('/???')
//     .get(adminController.register)
//     .post(adminController.registerSave);

router.get('/logout', userController.logout);

router.route('/profile/parent/:id')
    .put(userController.updatePassword)
    // .put(userController.updateUser);


router.use(errorController.notFoundResource);

module.exports = router;