const express = require('express');

const errorController = require('../controllers/404');
const userController = require('../controllers/user');
const adminController = require('../controllers/admin')
const recapController = require('../controllers/recap');
const commentController = require('../controllers/comment');

const checkTokenMiddleware = require('../middlewares/token');

const router = express.Router();

router.use('/checktoken', checkTokenMiddleware);

// ROUTES TO DISPLAY ALL DATA

// get all users - for admin
router.route('/profile/admin/allusers')
    .get(userController.getAllUsers);

// get all parents (with children) - for admin
router.route('/profile/admin/parents')
    .get(userController.getAllParents);

// get all staff members - for admin
router.route('/profile/admin/allstaff')
    .get(userController.getAllStaff);

// get all children - for admin
router.route('/profile/admin/children')
    .get(userController.getAllChildren);

// get all children - for staff
router.route('/profile/staff/children')
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
    .get(userController.getParentById)
    .patch(userController.updateUser);

// modify password (with parent id)
router.route('/profile/parent/:id/password')
    .patch(userController.updatePassword);
//? voir pour refacto pour tous les users : /profile/user/:id/password ???

// modify password for STAFF (with user id)
router.route('/profile/staff/:id/password')
    .patch(userController.updatePassword);

// get child by id - for admin
router.route('/profile/admin/child/:id')
    .get(adminController.getChildById);

// get child by id - for staff
router.route('/profile/staff/child/:id')
    .get(adminController.getChildById);




// modify child
router.route('/profile/parent/:id/child/:childId')
    .get(userController.getChildFromParent)
    .patch(userController.modifyChild);

// get staff by id
router.route('/profile/staff/:id')
    .get(userController.getStaffById);
// patch -> modifyStaff

// get recap by id
router.route('/profile/staff/recap/:id')
    .get(recapController.getRecapById);

// get recaps by child id 
router.route('/profile/staff/child/:childId/recaps')
    .get(recapController.getRecapsByChildId);


// get comment by id
router.route('/profile/staff/comments/:id')
    .get(commentController.getCommentById);


// get comments by child id
router.route('/profile/staff/comments/child/:childId')
    .get(commentController.getCommentsByChildId);


// get all of one parent's comments - for staff
router.route('/profile/staff/comments/parent/:parentId')
    .get(commentController.getCommentsByParentId);

// get all of one parent's comments - for the parent
router.route('/profile/parent/:parentId/comments')
    .get(commentController.getCommentsByParentId);


// adding a user (selecting role_id in the request.body)
router.route('/profile/admin/manageprofile')
    .post(adminController.addUser);

// modifying or deleting a user
router.route('/profile/admin/manageprofile/:id')
    .delete(adminController.deleteUser);

// adding a child (for admin)
router.route('/profile/admin/parent/:id/managechildren')
    .post(adminController.addChild);


// modifying a child - for admin
router.route('/profile/admin/parent/:id/managechildren/:childId')
    .patch(userController.modifyChild)
    .delete(adminController.deleteChild);

// adding a recap - with nap and meal
router.route('/profile/staff/child/recap')
    .post(recapController.addRecap);

// adding a nap to a recap
router.route('/profile/staff/child/recap/:recapId/nap')
    .post(recapController.addNap);

// adding a meal to a recap
router.route('/profile/staff/child/recap/:recapId/meal')
    .post(recapController.addMeal);

// modify and delete a recap
router.route('/profile/staff/child/recap/:recapId/')
    .patch(recapController.modifyRecap)
    .delete(recapController.deleteRecap);

// modify and delete a nap in a recap
router.route('/profile/staff/child/recap/:recapId/nap/:napId')
    .patch(recapController.modifyNap)
    .delete(recapController.deleteNap);

// modify and delete a meal in a recap
router.route('/profile/staff/child/recap/:recapId/meal/:mealId')
    .patch(recapController.modifyMeal)
    .delete(recapController.deleteMeal);

// adding a comment (for parents)
router.route('/profile/parent/:id/child/:childId/comments')
    .post(commentController.addComment);


// modifying/deleting a comment (for parents)
router.route('/profile/parent/:id/child/:childId/comments/:commentId')
    .patch(commentController.modifyComment)
    .delete(commentController.deleteComment);


router.route('/login')
    .post(userController.checkLogin);


router.get('/logout', userController.logout);




router.use(errorController.notFoundResource);

module.exports = router;