const express = require("express");
const c = require("./controller");
const r = express.Router();

r.post("/edit_type",c.controller);

module.exports = r;