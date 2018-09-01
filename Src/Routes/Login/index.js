const express = require('express');
const l = require('./logic');
const c = require('./controller');
const { processValidator } = require('../../Util/global');

const r = express.Router();
r.post('/login', l.login, processValidator, c.login);

module.exports = r;
