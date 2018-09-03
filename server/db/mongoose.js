var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

/*
The first mongoose is the variable.  The second mongoose is the property.  They have the same name.
module.exports = {
    mongoose: mongoose
};
*/

// In JavaScript ES6, if a variable and its property have the same name, the statement can be simplified as below.
module.exports = {mongoose};