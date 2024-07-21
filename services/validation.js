const { body, validationResult } = require("express-validator");

exports.UserRegister = () => {
    return [
        body("name", "Name is required").not().isEmpty(),
        body("email", "email is required").not().isEmpty(),
        body("mobile", "mobile is required").not().isEmpty(),
        body("dob", "dob is required").not().isEmpty(),
    ];
};


// validate function
exports.validate = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        return next();
    }

    let custArr = {};
    let errNEW = errors.errors;
    for(let index in errNEW) {
        let keyname = errNEW[index].path;
        let msgNew = errNEW[index].msg;
        custArr[keyname]  = msgNew;
    }

    return res.status(200).json({
        status: 0,
        msg: "error",
        data: custArr,
    });
};