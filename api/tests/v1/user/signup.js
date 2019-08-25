
const assert = require('assert');
const request = require('request');


module.exports = function() {
    describe('POST', function() {
        it.skip('should create a test account', function(done) {
            request.post('http://localhost:5000/v1/user/signup', {
                json: {
                    email: 'andy@bountye.com',
                    password: 'testPassword4#',
                    name: 'Andy'
                }
            }, (err, res) => {
                if (err) {
                    return done(err);
                }

                assert.equal(res.statusCode, 200);
                console.log(res);
                done();
            })
        });

        after(function() {
            // TODO: delete the created user account
        })
    });
}