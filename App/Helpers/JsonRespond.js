module.exports = JsonRespond;

function JsonRespond(err, res, data, params, code) {
    if (err == null) {
        res.send({
            success: true,
            parameters: params,
            data: data
        });
    }
    else {
        if (code === undefined) code = 500;
        res.status(code).send({
            success: false,
            error: err,
            parameters: params,
            data: data
        });
    }
};