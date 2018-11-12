const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo}  = require ('./../server/models/todo');
const {User}  = require ('./../server/models/user');

/*
Todo.remove({}).then((result) => {
    console.log(result);
});
*/

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

/*
Todo.findOneAndRemove({_id: '5be9f4ae8b2aceec4b3409dd'}).then((todo) => {
    console.log(todo);
});
*/

Todo.findByIdAndRemove('5be9f31e8b2aceec4b3409ad').then((todo) => {
    console.log(todo);
});
