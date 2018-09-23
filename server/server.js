var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {    
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (err) => {
        res.status(400).send(err);
    });
});

app.get ('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (err) => {
        res.status(400).send(err);
    });
});

app.get('/todos/:id', (req, res) => {
    var id = req.params.id;
    
    /*
    Validate id using isValid
        404 - send back empty send

    findById
        success
            if todo - send it back
            if no todo - send back 404 with empty body
        error
            400 - send empty body back
    */

    if (!ObjectID.isValid(id)) {
        // console.log('Id not valid');
        return res.status(404).send();
    }

    Todo.findById(id).then((todo) => {
        if (!todo) {
            // console.log('Id not found');
            return res.status(404).send();
        }
        res.send({todo});
    }).catch((err) => {
        res.status(400).send();
    });    
});

app.listen(3000, () => {
    console.log('Started on port 3000');
});

module.exports = {app};