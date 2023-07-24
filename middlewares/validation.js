const emailFormat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

function validateUser(req, res, next) {
    if (!req.body.name) {
        return res.status(400).send({
            message: "No NAME field for user!"
        });
    }

    if (!req.body.email) {
        return res.status(400).send({
            message: "No EMAIL field for user!"
        });
    }

    if (!req.body.email.match(emailFormat)) {
        return res.status(400).send({
            message: "Not valid EMAIL format!"
        }); 
    }

    if (!req.body.password) {
        return res.status(400).send({
            message: "No PASSWORD field for user!"
        });
    }

    if (req.body.password.length < 8) {
        return res.status(400).send({
            message: "PASSWORD filed need to have minimum 8 characthers!"
        });
    }

    next();
}

function parseToInt (req, res, next) {
    if (req.params.userId) {
        req.params.userId = parseInt(req.params.userId);
    }
    
    if (req.params.postId) {
        req.params.postId = parseInt(req.params.postId);
    }

    if (req.params.likedPostId) {
        req.params.likedPostId = parseInt(req.params.likedPostId);
    }

    if (req.body.userId && req.body.postId) {
        req.body.userId = parseInt(req.body.userId);
        req.body.postId = parseInt(req.body.postId);
    }
    next();
}

function validatePost(req, res, next) {
    if (!req.body.title) {
        return res.status(400).send({
            message: "No TITLE field for user!"
        });
    }

    if (!req.body.content) {
        return res.status(400).send({
            message: "No CONTENT field for user!"
        });
    }

    if (!req.body.authorId) {
        return res.status(400).send({
            message: "No AUTHORID field for user!"
        });
    }

    next();
}


module.exports = {
    validateUser,
    parseToInt,
    validatePost
}