const express = require('express');
const router = express.Router();

const { userController, adminController } = require('../controllers');


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

// modify password for ADMIN (with user id)
router.route('/profile/admin/:id(\\d+)/password')
    .patch(userController.updatePassword);


// get child by id - for admin
router.route('/profile/admin/child/:id(\\d+)')
    .get(adminController.getChildById);

// adding a user (selecting role_id in the request.body)
router.route('/profile/admin/manageprofile')
    .post(adminController.addUser);

// modifying or deleting a user
router.route('/profile/admin/manageprofile/:id(\\d+)')
    .delete(adminController.deleteUser);

// adding a child (for admin)
router.route('/profile/admin/parent/:id(\\d+)/managechildren')
    .post(adminController.addChild);


// modifying a child - for admin
router.route('/profile/admin/parent/:id(\\d+)/managechildren/:childId(\\d+)')
    .patch(userController.modifyChild)
    .delete(adminController.deleteChild);



module.exports = router;