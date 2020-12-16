const express = require('express');

const routes = (server) => {
  const router = express.Router();
  const todoService = require('../api/todo/todo.service');

  server.use('/api', router);

  todoService.register(router, '/todos');

};

module.exports = { routes };
