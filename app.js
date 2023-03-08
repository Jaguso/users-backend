const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors())

const userRouter = require('./routes/userRoutes');

app.use('/api', userRouter);
// ss
module.exports = app;