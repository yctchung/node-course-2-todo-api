const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {User}  = require ('./../server/models/user');

var id = '5b8c70a339db4ce8309ed924';

User.findById (id).then((user) => {
    if (!user) {
        return console.log('Unable to find user');
    }
    console.log(JSON.stringify(user, undefined, 2));
}, (err) => {
    console.log(err);
});
