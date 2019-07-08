
global.fetch = require('node-fetch');
const AmazonCognitoIdentity = require('amazon-cognito-identity-js');


const poolData = {
    UserPoolId : 'ap-southeast-2_mhUxG8xvH',
    ClientId : '1hk2pqs1huhf4pki42sgkkr18d'
};

const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);


function createAttributeList(email, name) {
    const attributeList = [];

    attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({
        Name: 'nickname',
        Value: name
    }));

    attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({
        Name: 'email',
        Value: email
    }));

    // attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({
    //     Name: 'accountType',
    //     Value: 'standard'
    // }));

    return attributeList;
}


module.exports = {
    userPool: userPool,
    createAttributeList: createAttributeList
}
