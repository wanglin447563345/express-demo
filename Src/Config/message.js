exports.error = {
    SUCCESS: [0, '成功'],

    UNKNOWN_ERROR: [10000, '未知错误'],
    VALIDATE_ERROR: [10001, '参数错误'],

    HTTP_FORBIDDEN: [10403, '禁止访问'],
    HTTP_NOT_FOUND: [10404, '未找到此API'],
    HTTP_SERVER_ERROR: [10500, '服务器出错'],

    ERR_USER_LOGIN: [21001, '用户名或密码错误'],
    ERR_USER_NOT_EXISTS: [21002, '用户不存在'],
    ERR_USER_AUTH_INS_HEADERS: [21003, '用户认证失败，缺少header'],
    ERR_USER_AUTH_TOKEN: [21004, '用户认证失败，token错误'],

    ERR_USER_EXITED:[32001,"该用户名已被占用"],
    TYPE_EXITED:[32002,"该分类名已存在"]
};

exports.message = {
    SUCCESS: '成功',
    NEED_USER_NAME: '请输入用户名',
    NEED_PASSWORD: '请输入密码',
};