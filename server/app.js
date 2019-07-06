const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const SecurityRouter = require('./routes/security');
const verifyToken = require('./middlewares/security');
const UserRouter = require('./routes/user');
const CardRouter = require('./routes/card');
const ListRouter = require('./routes/list');
const CommentRouter = require('./routes/comment');
const LabelRouter = require('./routes/label');

const app = express();

app.use(cors());
app.use(bodyparser.json());
app.use('/', SecurityRouter);