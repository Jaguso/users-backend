const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router
    .route('/users')
    .post(userController.createUser)
    .get(userController.getAllUsers)

router
    .route('/users/:id')
    .get(userController.getSingleUser)
    .put(userController.updateUser)
    .delete(userController.deleteUser)

module.exports = router;