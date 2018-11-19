require('./config/config')

const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
const port = process.env.PORT;

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

app.delete('/todos/:id', (req, res) => {
    var id = req.params.id;

    /*
    get the id

    validate the id  -> not valid? return 404

    remove todo by id
        success
            if no doc, send 404
            if doc, send doc back with 200
        error
            400 with empty body
    */

   if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    Todo.findByIdAndRemove(id).then((todo) => {
        if (!todo) {
            return res.status(404).send();
        }
        res.send({todo});
    }).catch((err) => {
        res.status(400).send();
    });    
});

app.patch('/todos/:id', (req, res) => {
    var id = req.params.id;
    var body = _.pick(req.body, ['text', 'completed']);

    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    if (_.isBoolean(body.completed) && body.completed) {
        body.completedAt = new Date().getTime();
        body.co
    } else {
        body.completed = false;
        body.completedAt = null;
    }

    Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
        if (!todo) {
            return res.status(404).send();
        }
        res.send({todo});
    }).catch((err) => {
        res.status(400).send();
    })
});

app.listen(port, () => {
    console.log(`Started up at port ${port}`);
});

module.exports = {app};