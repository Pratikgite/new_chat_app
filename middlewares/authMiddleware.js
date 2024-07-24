const jwt = require("jsonwebtoken");

exports.verifyToken = async (req, res, next) => {
    const token = req.header("Authorization");
    if(!token) {
        return res.json({ status:0, msg: "error", data: `Some error occures: Authorization Token is required.` });
    }

    try {
        const decode = await jwt.verify(token, process.env.JWT_SECRET);
        req.user = decode;
        next();
    } catch(err) {
        return res.json({ status:0, msg: "error", data: `Some error occures: Invalid Authorization Token.` });
    }
}