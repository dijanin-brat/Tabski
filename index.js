const express = require('express');
const db = require('./models');
const bodyParser = require('body-parser');
const UserRouter = require('./routes/user.router');
const PostRouter = require('./routes/post.router');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json())

app.use('/users', UserRouter);
app.use('/posts', PostRouter);

db.sequelize.sync().then((req) => {
    app.listen(PORT, console.log(`Started listening on port: ${PORT}`));
})
