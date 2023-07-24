const express = require('express');
const router = express.Router();
const PostController = require('../controllers/post.controller');
const { validatePost } = require('../middlewares/validation');

// get all posts
router.get('/', PostController.getPosts);
// get specific post by id
router.get('/post/:postId', PostController.getPostById);
// create new post
router.post('/', validatePost, PostController.createPost);
// delete post
router.delete('/post/:postId', PostController.deletePost);
// update post
router.patch('/post/:postId', PostController.updatePost);

module.exports = router;