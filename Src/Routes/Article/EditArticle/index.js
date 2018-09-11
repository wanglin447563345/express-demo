const express = require("express");
const c = require("./controller");

const r = express.Router();
r.post('/edit_article', c.controller);

module.exports = r;