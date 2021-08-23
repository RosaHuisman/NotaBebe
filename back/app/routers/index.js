const express = require('express');

const errorController = require('../controllers/404');
const userController = require('../controllers/user');
const adminController = require('../controllers/admin')
const recapController = require('../controllers/recap');
const commentController = require('../controllers/comment');

const router = express.Router();

// ROUTES TO DISPLAY ALL DATA

// get all users - for admin
router.route('/profile/admin/allusers')
    .get(userController.getAllUsers);

// get all parents - for admin
router.route('/profile/admin/parents')
    .get(userController.getAllParents);

// get all staff members - for admin
router.route('/profile/admin/allstaff')
    .get(userController.getAllStaff);

// get all children - for admin
router.route('/profile/admin/children')
    .get(userController.getAllChildren);

// get all recaps - for staff
router.route('/profile/staff/allrecaps')
    .get(recapController.getAllRecaps);

// get all comments - for staff
router.route('/profile/staff/comments')
    .get(commentController.getAllComments);


// ROUTES TO DISPLAY SPECIFIC DATA

// get parent by id
router.route('/profile/parent/:id')
    .get(userController.getParentById);

router.route('/profile/parent/:id/child/:childId')
    .get(userController.getChildFromParent);

// get staff by id
router.route('/profile/staff/:id')
    .get(userController.getStaffById);

// get recap by id
router.route('/profile/staff/recap/:id')
    .get(recapController.getRecapById);

// get comment by id
router.route('/profile/staff/comments/:id')
    .get(commentController.getCommentById);

// get parent with children







//TODO get recap by child id




router.route('/login')
    .post(userController.checkLogin);

router.get('/logout', userController.logout);


router.route('/profile/parent/:id')
    .patch(userController.updateUser);

router.route('/profile/parent/:id/password')
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


router.route('/profile/staff/recap/child/')
    .post(recapController.addRecap)

router.route('/profile/staff/recap/child/:recapId')
    .patch(recapController.modifyRecap)
    .delete(recapController.deleteRecap)


//TODO mieux paramétrer les deux routes suivantes -- cibler le parentId et le childId
// adding a comment (for parents)
router.route('/profile/parent/comments/')
    .post(commentController.addComment)
// modifying/deleting a comment (for parents)
router.route('/profile/parent/comments/:id')
    .patch(commentController.modifyComment)
    .delete(commentController.deleteComment);


// router.route('/profile/admin/parent/:id/managechildren/:childid')
//     //.patch(userController.modifyChild)
//     .delete(adminController.deleteChild);

router.use(errorController.notFoundResource);

module.exports = router;