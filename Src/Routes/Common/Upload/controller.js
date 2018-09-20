const g = require('../../../Util/global');
const fs = require("fs");

exports.controller = async (req, res,next) => {
    try {
        const des_file = "./public/uploads/" + req.file.originalname;
        fs.readFile( req.file.path, function (err, data) {
            fs.writeFile(des_file, data, function (err) {
                if( err ){
                    console.log( err );
                }else{
                    response = {
                        url:"/uploads/" + req.file.originalname
                    };
                    return g.success(req, res, response);
                }
            });
        });

    } catch (err) {
        return g.fail(req, res,'HTTP_SERVER_ERROR', err.stack);
    }
};