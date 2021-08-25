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

// get all parents (with children) - for admin
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
    .get(userController.getParentById)
    .patch(userController.updateUser) //! -- patch à améliorer??? (cf Object.keys/Object.values)

// modify password (with parent id)
router.route('/profile/parent/:id/password')
    .patch(userController.updatePassword);
//? voir pour refacto pour tous les users


// modify password for STAFF (with user id)
router.route('/profile/staff/:id/password')
    .patch(userController.updatePassword);

//
router.route('/profile/parent/:id/child/:childId')
    .get(userController.getChildFromParent);
//patch --> modifyChild

// get staff by id
router.route('/profile/staff/:id')
    .get(userController.getStaffById);
// patch -> modifyStaff

// get recap by id
router.route('/profile/staff/recap/:id')
    .get(recapController.getRecapById);


// TODO get recaps by child id ?
// router.route('/profile/staff/child/:childId/recaps')
//     .get(recapController.getRecapsByChildId);


// get comment by id
router.route('/profile/staff/comments/:id')
    .get(commentController.getCommentById);


//TODO get comments by parent id ?
// router.route('/profile/staff/comments/parent/:parentId')
//     .get(commentController.getCommentsByParentId);



// adding a user
router.route('/profile/admin/manageprofile')
    .post(adminController.addUser);

// modifying or deleting a user
router.route('/profile/admin/manageprofile/:id')
    .delete(adminController.deleteUser);


//TODO router.route('/profile/admin/parent/:id/managechildren')
//TODO     .post(adminController.addChild);

// router.route('/profile/admin/parent/:id/managechildren/:childid')
//      .patch(userController.modifyChild)
//     .delete(adminController.deleteChild);



router.route('/profile/staff/child/recap')
    .post(recapController.addRecap);

router.route('/profile/staff/child/recap/:recapId/')
    .patch(recapController.modifyRecap)
    .delete(recapController.deleteRecap);


// adding a comment (for parents)
router.route('/profile/parent/:id/child/:childId/comments')
    //! TODO get? + ajouter les request.params dans les méthodes
    .post(commentController.addComment);

// modifying/deleting a comment (for parents)
router.route('/profile/parent/:id/child/:childId/comments/:commentId')
    //! ajouter les request.params dans les méthodes
    //.patch(commentController.modifyComment) - améliorer le patch (cf au-dessus)
    .delete(commentController.deleteComment);








router.route('/login')
    .post(userController.checkLogin);

router.get('/logout', userController.logout);




router.use(errorController.notFoundResource);

module.exports = router;