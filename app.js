const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

app.use(express.json());

const userRouter = require('./routes/userRoutes');

app.use('/api', userRouter);

module.exports = app;