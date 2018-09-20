const express = require('express');
const multer  = require('multer');
const upload = multer({ dest: './public/uploads/' });
const c = require('./controller');

const r = express.Router();
r.post('/upload',upload.single('file'), c.controller);

module.exports = r;
