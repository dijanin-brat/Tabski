const PostService = require('../services/post.service');
const UserService = require('../services/user.service');

async function getPosts(req, res) {
    const limit = req.query.limit || 10;
    const offset = req.query.offset || 0;

    try {
        const posts = await PostService.getPosts(limit, offset);
    
        res.status(200).send({
            message: 'Request done successfuly!',
            posts
        });

    } catch (e) {
        console.log(e); // some logger here
        res.status(500).json({
            message: e.message
        });    }
}

async function getPostById(req, res) {
    const { postId } = req.params;

    try {
        const post = await PostService.getPostById(postId);
    
        res.status(200).send({
            message: 'Request done successfuly!',
            post
        });

    } catch (e) {
        console.log(e); // some logger here
        res.status(500).json({
            message: e.message
        });    }
}

async function createPost(req, res) {
    const data = req.body;
    
    try {
        const user = await UserService.getUserById(data.authorId)

        if (!user) {
            throw Error('There is no user with this ID');
        }

        const post = await PostService.createPost(data);
    
        res.status(200).send({
            message: 'Request done successfuly!',
            post
        });

    } catch (e) {
        console.log(e); // some logger here
        res.status(500).json({
            message: e.message
        });    }
}

async function deletePost(req, res) {
    const { postId } = req.params;

    try {
        const post = await PostService.deletePost(postId);
    
        res.status(200).send({
            message: 'Request done successfuly!',
            post
        });

    } catch (e) {
        console.log(e); // some logger here
        res.status(500).json({
            message: e.message
        });    }
}

async function updatePost(req, res) {
    const { postId } = req.params;

    const data = req.body;

    try {
        if (data.authorId) {
            const user = await UserService.getUserById(authorId);

            if (!user) {
                throw Error('There is no user with this ID');
            }
        }
        const post = await PostService.updatePost(postId, data);
    
        res.status(200).send({
            message: 'Request done successfuly!',
            post
        });

    } catch (e) {
        console.log(e); // some logger here
        res.status(500).json({
            message: e.message
        });    }
}

module.exports = {
    getPosts,
    getPostById,
    createPost,
    deletePost,
    updatePost
}