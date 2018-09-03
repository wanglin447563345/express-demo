const express = require('express');
const c = require('./controller');

const r = express.Router();
r.post('/list_user', c.controller);

module.exports = r;
