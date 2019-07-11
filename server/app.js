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
// app.use(verifyToken);
app.use('/comment', CommentRouter);
app.use('/label', LabelRouter);
app.use('/user', UserRouter);
app.use('/list', ListRouter);
app.use('/card', CardRouter);
app.listen(3000, () => console.log("Listening"));