//const MongoClient = require('mongodb').MongoClient;  This is same as:- const {MongoClient, ObjectID} = require('mongodb');
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to coneect to MongoDB server');
    }
    console.log('Connect to MongoDB server');

    db.collection('Todos').find().count().then((count) => {
        console.log(`Todos count: ${count}`);
    }, (err) => {
        console.log('Unable to fetch todos', err)
    });

    // db.close();
});