
module.exports = function() {
    describe('/login', require('./login.js'));
    describe('/info', require('./info.js'));
    describe('/signup', require('./signup.js'));
}
