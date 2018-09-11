const express = require('express');
const c = require('./controller');

const r = express.Router();
r.post('/change_password', c.controller);

module.exports = r;
