const express = require("express");
const c = require("./controller");
const l = require('./logic');
const { processValidator } = require('../../../Util/global');

const r = express.Router();
r.post('/edit_user', l.logic, processValidator, c.controller);

module.exports = r;