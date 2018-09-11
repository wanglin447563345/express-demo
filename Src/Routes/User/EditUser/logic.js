const { checkSchema } = require('express-validator/check');

exports.logic = checkSchema({
    user_name: {
        errorMessage: 'NEED_USER_NAME',
        exists: true,
    },
});
