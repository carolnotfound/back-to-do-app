const Todo = require('./todo');

Todo.methods(['get', 'post', 'put', 'patch', 'delete']);
Todo.updateOptions({new: true, runValidators: true});

module.exports = Todo;