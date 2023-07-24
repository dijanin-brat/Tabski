const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controller');
const {validateUser, parseToInt} = require('../middlewares/validation')

router.get('/', UserController.getUsers);
router.get('/user/:userId', parseToInt, UserController.getUserById);
router.post('/', validateUser, UserController.createUser);
router.delete('/user/:userId', parseToInt, UserController.deleteUser);
router.patch('/user/:userId', parseToInt, UserController.updateUser);
router.post('/liked_post', parseToInt, UserController.likePost);
router.delete('/liked_post/:likedPostId', parseToInt, UserController.unlikePost);


module.exports = router;