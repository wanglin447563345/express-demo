const crypto = require('crypto');
const { validationResult } = require('express-validator/check');
const error = require("../Config/message").error;
const message = require("../Config/message").message;
// 错误返回
exports.fail = (req, res, code, data) => {
    let results;
    if (error[code]) {
        results = { errno: error[code][0], errmsg: error[code][1], data };
    } else {
        results = { errno: error.UNKNOWN_ERROR[0], errmsg: error.UNKNOWN_ERROR[1], data };
    }
    return res.send(results);
};

exports.processValidator = (req, res, next) => {
    try {
        validationResult(req).throw();
        return next();
    } catch (err) {
        let ret = '';
        const mappedErr = err.mapped();
        Object.keys(mappedErr).map((d) => {
            console.log(d);
            if (ret) {
                ret += '|';
            }
            ret += message[mappedErr[d].msg];
            return 0;
        });
        return exports.fail(req, res, 'VALIDATE_ERROR', ret);
    }
};

exports.success = (req, res, data) => {
    exports.fail(req, res, 'SUCCESS', data);
};

exports.notFound = (req, res) => {
    exports.fail(req, res, 'HTTP_NOT_FOUND');
};

exports.md5 = (str, encoding = 'utf8') => crypto.createHash('md5').update(str, encoding).digest('hex');

exports.post = () => {};

exports.pagination = (c, cp, npp) => {
    const count = parseInt(c, 10) > 0 ? parseInt(c, 10) : 0;
    let currentPage = parseInt(cp, 10) > 0 ? parseInt(cp, 10) : 1;
    const numberPerPage = parseInt(npp, 10) > 0 ? parseInt(npp, 10) : 10;

    if (count === 0) {
        return {
            count, totalPage: 0, currentPage: 1, numberPerPage, from: 0,
        };
    }
    const totalPage = Math.ceil(count / numberPerPage) || 0;
    if (currentPage > totalPage && totalPage > 0) {
        currentPage = totalPage;
    }
    const from = numberPerPage * (currentPage - 1) > '0' ? numberPerPage * (currentPage - 1) : 0;
    return {
        count, totalPage, currentPage, numberPerPage, from,
    };
};
