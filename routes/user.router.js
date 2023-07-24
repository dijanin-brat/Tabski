const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controller');
const {validateUser, parseToInt} = require('../middlewares/validation')

// get all users
router.get('/', UserController.getUsers);
// get user by id
router.get('/user/:userId', parseToInt, UserController.getUserById);
// create new user
router.post('/', validateUser, UserController.createUser);
// delete user
router.delete('/user/:userId', parseToInt, UserController.deleteUser);
// update user
router.patch('/user/:userId', parseToInt, UserController.updateUser);
// like specific post for specific user 
router.post('/liked_post', parseToInt, UserController.likePost);
// unlike specific post
router.delete('/liked_post/:likedPostId', parseToInt, UserController.unlikePost);


module.exports = router;