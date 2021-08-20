const express = require('express');

const errorController = require('../controllers/404');
const userController = require('../controllers/user');
const adminController = require('../controllers/admin')
const recapController = require('../controllers/recap');
const commentController = require('../controllers/comment');

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

// router.route('/profile/parent/:id/info')
//     .patch(userController.updateUser);

router.route('/profile/parent/:id')
    .patch(userController.updatePassword)

// adding a user
router.route('/profile/admin/manageprofile')
    .post(adminController.addUser);


// modifying or deleting a user
router.route('/profile/admin/manageprofile/:id')
    // .patch(adminController.modifyUser)
    .delete(adminController.deleteUser);


// router.route('/profile/admin/parent/:id/managechildren')
//     .post(adminController.addChild);
router.route('/test/allrecaps')
    .get(recapController.getAll);
//! changer le nom de la route

router.route('/profile/staff/recap/child/')
    .post(recapController.addRecap)

router.route('/profile/staff/recap/child/:recapId')
    .patch(recapController.modifyRecap)
    .delete(recapController.deleteRecap)


// router.route('/profile/admin/parent/:id/managechildren/:childid')
//     //.patch(userController.modifyChild)
//     .delete(adminController.deleteChild);

router.use(errorController.notFoundResource);

module.exports = router;