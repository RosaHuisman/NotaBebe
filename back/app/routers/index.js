const express = require('express');

const errorController = require('../controllers/404');
const userController = require('../controllers/user');
const adminController = require('../controllers/admin');

const router = express.Router();

router.route('/login')
    .get(userController.login)
    .post(userController.checkLogin);

// router.route('/???')
//     .get(adminController.register)
//     .post(adminController.registerSave);

router.get('/logout', userController.logout);

router.route('/profile/parent/:id')
    .patch(userController.updatePassword)

// router.route('/profile/parent/:id/info')
//     .patch(userController.updateUser);


// adding a user
router.route('/profile/admin/manageprofile')
    .post(adminController.addUser);


// modifying or deleting a user
router.route('/profile/admin/manageprofile/:id')
    // .patch(adminController.modifyUser)
    .delete(adminController.deleteUser);


// router.route('/profile/admin/parent/:id/managechildren')
//     .post(adminController.addChild);

// router.route('/profile/admin/parent/:id/managechildren/:childid')
//     //.patch(userController.modifyChild)
//     .delete(adminController.deleteChild);

router.use(errorController.notFoundResource);

module.exports = router;