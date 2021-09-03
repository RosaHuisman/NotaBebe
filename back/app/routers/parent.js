const express = require('express');
const router = express.Router();


const { userController, commentController } = require('../controllers');
// ya pas un ordre ? genre le require des controtro avt le router pr pas que ca pete? euh jsais pas mdrrr mais j'aimais pas comme ça.. on testera
// ok

// get parent by id
router.route('/profile/parent/:id(\\d+)')
    .get(userController.getParentById)
    .patch(userController.updateUser);

// modify password (with parent id)
router.route('/profile/parent/:id(\\d+)/password')
    .patch(userController.updatePassword);
//? voir pour refacto pour tous les users : /profile/user/:id/password ???

// modify child
router.route('/profile/parent/:id(\\d+)/child/:childId(\\d+)')
    .get(userController.getChildFromParent)
    .patch(userController.modifyChild);

// get all of one parent's comments - for the parent
router.route('/profile/parent/:parentId(\\d+)/comments')
    .get(commentController.getCommentsByParentId);

// adding a comment (for parents)
router.route('/profile/parent/:id(\\d+)/child/:childId(\\d+)/comments')
    .post(commentController.addComment);

// modifying/deleting a comment (for parents)
router.route('/profile/parent/:id(\\d+)/child/:childId(\\d+)/comments/:commentId(\\d+)')
    .patch(commentController.modifyComment)
    .delete(commentController.deleteComment);

module.exports = router;