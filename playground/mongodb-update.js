//const MongoClient = require('mongodb').MongoClient;  This is same as:- const {MongoClient, ObjectID} = require('mongodb');
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to coneect to MongoDB server');
    }
    console.log('Connect to MongoDB server');

    /*
    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID("5b8995a5bfb29feddba41a79")
    }, {
        $set: {
            completed: true
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });
    */

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("5b81ccda80fb4d12a8d8195d")
    }, {
        $set: {name: "Jenny"},
        $inc: {age: 1}
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });    

    // db.close();
});