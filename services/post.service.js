const db = require('../models');
const model = db.sequelize.models.post;
const user = db.sequelize.models.user;
const likedPost = db.sequelize.models.liked_post;

async function getPosts(limit, offset) {
    return model.findAll({
        include: [
            {
                model: user,
                as: 'user'
            },
            {
                model: user,
                as: 'liked_post_user',
                required: false
            }
        ],
        limit: limit,
        offset: offset
    });
}

async function getPostById(id) {
    return model.findOne({
        where: {
            id: id
        },
        include: [
            {
                model: user,
                as: 'user'
            },
            {
                model: user,
                as: 'liked_post_user',
                required: false
            }
        ]
    });
}

async function createPost(data) {
    return model.create({
        title: data.title,
        content: data.content,
        authorId: data.authorId
    });
}

async function deletePost(id) {
    await likedPost.destroy({
        where: {
            postId: id
        }
    });

    return model.destroy({
        where: {
            id: id
        }
    });
}

async function updatePost(id, data) {
    const updateObject = {};
    if (data.title) {
        updateObject.title = data.title;
    }

    if (data.content) {
        updateObject.content = data.content;
    } 

    if (data.authorId) {
        updateObject.authorId = data.authorId;
    }

    return model.update(updateObject,
    {
        where: {
            id: id
        }
    });
}

module.exports = {
    getPosts,
    getPostById,
    createPost,
    deletePost,
    updatePost
}