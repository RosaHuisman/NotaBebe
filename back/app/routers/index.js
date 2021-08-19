const express = require('express');

const errorController = require('../controllers/404');
const userController = require('../controllers/user');
// const adminController = require('../controllers/admin');
const recapController = require('../controllers/recap');
const commentController = require('../controllers/comment');

const router = express.Router();

router.route('/login')
    //.get(userController.login)
    .post(userController.checkLogin);

// router.route('/???')
//     .get(adminController.register)
//     .post(adminController.registerSave);

router.get('/logout', userController.logout);

router.route('/profile/parent/:id/info')
    .patch(userController.updateUser);

router.route('/profile/parent/:id')
    .patch(userController.updatePassword)


router.route('/test/allrecaps')
    .get(recapController.getAll);
//! changer le nom de la route

router.route('/profile/staff/recap/child/')
    .post(recapController.addRecap)

router.route('/profile/staff/recap/child/:recapId')
    .patch(recapController.modifyRecap)
    .delete(recapController.deleteRecap)



router.use(errorController.notFoundResource);

module.exports = router;