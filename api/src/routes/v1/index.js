
const v1Router = require('express').Router();


v1Router.use('/user', require('./user'));


module.exports = v1Router;
