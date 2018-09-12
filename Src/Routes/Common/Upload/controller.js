const g = require('../../../Util/global');
const fs = require('fs');

exports.controller = async (req, res) => {
    try {
        console.log(req.files[0])
        // 获得文件的临时路径
        // var tmp_path = req.files.thumbnail.path;
        // 指定文件上传后的目录 - 示例为"images"目录。
        // var target_path = './public/images/' + req.files.thumbnail.name;

        // console.log(b);
        // const r = await m.model(b.page,b.rows,b.user_name);
        // if (r.errno) {
        //     return g.fail(req, res, r.errno);
        // }
        return g.success(req, res, req.files[0]);
    } catch (err) {
        return g.fail(req, res,'HTTP_SERVER_ERROR', err.stack);
    }
};