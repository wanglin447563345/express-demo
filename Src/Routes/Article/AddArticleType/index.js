const express = require("express");
const c = require("./controller");

const r = express.Router();

r.post('/create_type',c.controller);

module.exports = r;
