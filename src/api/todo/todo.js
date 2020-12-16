const rest = require('node-restful');
const { model } = require('mongoose');
const mongoose = rest.mongoose;

const todoSchema = new mongoose.Schema({
  description: { type: String, required: true },
  done: { type: Boolean, required: true, default: false },
  createdAt: { type: Date, default: Date.now }
});

module.exports = rest.model('Todo', todoSchema);