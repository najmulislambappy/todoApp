const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todo = new Schema({
    task: String
});

const Todo = mongoose.model('todo', todo);

module.exports = Todo;