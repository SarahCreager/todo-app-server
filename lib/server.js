'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const authRouter = require('./router/auth.js');
const apiRouter = require('./router/api.js');

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(authRouter);
app.use(apiRouter);

module.exports = {
  app,
  start: (port) => {
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  },
};
