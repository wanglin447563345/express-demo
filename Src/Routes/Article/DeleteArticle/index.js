const express = require('express');
const c = require('./controller');

const r = express.Router();
r.post('/delete_article', c.controller);

module.exports = r;
