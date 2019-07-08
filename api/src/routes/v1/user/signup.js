
const cognitoProvider = require('../../../providers/cognito');

function validateRequest(req) {
    let errMsg;

    // TODO validate email & password & check for any other needed attributes
    if (!req.body.email || !req.body.password) {
        errMsg = "missing email or password";
    }

    return errMsg;
}

function signUpUser(req, res) {
    const validationError = validateRequest(req);

    if (!validationError) {
        const { email, password, name } = req.body;
        console.log(email, password, name);

        const attributeList = cognitoProvider.createAttributeList(email, name);

        cognitoProvider.userPool.signUp(email, password, attributeList, null, (err, cognitoRes) => {
            if (err) {
                console.error(err);
                return res.status(500).send({
                    message: err.message || JSON.stringify(err)
                });
            }

            console.log(cognitoRes);
            res.status(200).send({
                message: 'Successfully created the account'
            });
        });
    } else {
        res.status(400).send({
            message: validationError
        });
    }
}


module.exports = signUpUser;
