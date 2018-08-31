//const MongoClient = require('mongodb').MongoClient;  This is same as:- const {MongoClient, ObjectID} = require('mongodb');
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to coneect to MongoDB server');
    }
    console.log('Connect to MongoDB server');

    db.collection('Users').find({name: 'Andrew'}).toArray().then((docs) => {
        console.log('Users');
        console.log(JSON.stringify(docs, undefined, 2));        
    }, (err) => {
        console.log('Unable to fetch users', err)
    });

    // db.close();
});