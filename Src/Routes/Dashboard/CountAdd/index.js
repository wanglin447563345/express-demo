const express = require('express');
const c = require('./controller');

const r = express.Router();
r.post('/count_add', c.controller);

module.exports = r;