const express = require('express');
const c = require('./controller');

const r = express.Router();
r.post('/upload', c.controller);

module.exports = r;
