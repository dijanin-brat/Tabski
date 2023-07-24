const UserService = require('../services/user.service');
const PostService = require('../services/post.service');

async function getUsers(req, res) {
    const limit = req.query.limit || 10;
    const offset = req.query.offset || 0;

    try {

        const users = await UserService.getUsers(limit, offset);
    
        res.status(200).send({
            message: 'Request done successfuly!',
            users
        });

    } catch (e) {
        console.log(e); // some logger here
        res.status(500).json({
            message: e.message
        });
    }
}

async function getUserById(req, res) {
    const { userId } = req.params;
    
    try {
        const user = await UserService.getUserById(userId);
    
        res.status(200).send({
            message: 'Request done successfuly!',
            user
        });

    } catch (e) {
        console.log(e); // some logger here
        res.status(500).json({
            message: e.message
        });    }
}

async function createUser(req, res) {
    const data = req.body;
    try {
        const user = await UserService.createUser(data);
    
        res.status(200).send({
            message: 'Request done successfuly!',
            user
        });

    } catch (e) {
        console.log(e); // some logger here
        res.status(500).json({
            message: e.message
        });
    }
}

async function deleteUser(req, res) {
    const { userId } = req.params;
    try {
        const user = await UserService.deleteUser(userId);
    
        res.status(200).send({
            message: 'Request done successfuly!',
            user
        });

    } catch (e) {
        console.log(e); // some logger here
        res.status(500).json({
            message: e.message
        });    }
}

async function updateUser(req, res) {
    const { userId } = req.params;

    const data = req.body;
    try {
        const user = await UserService.updateUser(userId, data);
    
        res.status(200).send({
            message: 'Request done successfuly!',
            user
        });

    } catch (e) {
        console.log(e); // some logger here
        res.status(500).json({
            message: e.message
        });    }
}

async function likePost(req, res) {
    const {userId, postId} = req.body;
    try {
        const user = await UserService.getUserById(userId);

        if (!user) {
            throw Error('There is no user with this ID');
        }

        const post = await PostService.getPostById(postId);

        if (!post) {
            throw Error('There is no post with this ID');
        }

        const likedPost = await UserService.likePost(userId, postId);

        res.status(200).send({
            message: "Request done successfuly!",
            likedPost
        });
        
    } catch (e) {
        console.log(e); // some logger here
        res.status(500).json({
            message: e.message
        });    }
}

async function unlikePost(req, res) {
    const {likedPostId} = req.params;
    try {
        const likedPost = await UserService.unlikePost(likedPostId);

        res.status(200).send({
            message: "Request done successfuly!",
            likedPost
        });
        
    } catch (e) {
        console.log(e); // some logger here
        res.status(500).json({
            message: e.message
        });    
    }
}

module.exports = {
    getUsers,
    getUserById,
    createUser,
    deleteUser,
    updateUser,
    likePost,
    unlikePost
}