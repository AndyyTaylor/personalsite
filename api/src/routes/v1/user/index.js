
const v1UserRouter = require('express').Router();


v1UserRouter.route('/login')
    .post(require('./login.js'));

v1UserRouter.route('/info')
    .get(require('./info.js'));

v1UserRouter.route('/signup')
    .post(require('./signup.js'));


module.exports = v1UserRouter;