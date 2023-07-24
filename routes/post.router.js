const express = require('express');
const router = express.Router();
const PostController = require('../controllers/post.controller');
const { validatePost } = require('../middlewares/validation');

router.get('/', PostController.getPosts);
router.get('/post/:postId', PostController.getPostById);
router.post('/', validatePost, PostController.createPost);
router.delete('/post/:postId', PostController.deletePost);
router.patch('/post/:postId', PostController.updatePost);

module.exports = router;