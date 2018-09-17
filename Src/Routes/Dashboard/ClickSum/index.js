const express = require("express");
const c = require('./controller');

const r = express.Router();
r.post("/click_sum",c.controller);

module.exports = r;