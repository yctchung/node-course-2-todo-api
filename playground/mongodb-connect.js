//const MongoClient = require('mongodb').MongoClient;  This is same as:- const {MongoClient, ObjectID} = require('mongodb');
const {MongoClient, ObjectID} = require('mongodb');

/* Use Object Destructuring to generate our own _id
var obj = new ObjectID();
console.log(obj);
*/

/*
JavaScript ES6 Object Destructuring Example
var user = {name: 'andrew', age: 25};
var {name} = user;
console.log(name);
*/

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to coneect to MongoDB server');
    }
    console.log('Connect to MongoDB server');

    /*
    db.collection('Todos').insertOne({
        text: 'Something to do',
        completed: false
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert todo', err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    });
    */

    /*
    db.collection('Users').insertOne({
        name: 'Andrew',
        age: 25,
        location: 'Boston'
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert Users', err);
        }

        console.log(result.ops[0]._id.getTimestamp());
    });
    */

    db.close();
});