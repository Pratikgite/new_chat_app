const Users = require("../../models/UsersModel");
const { storeData, fetchDataById, fetchData } = require("../../database/mongo_crud");

exports.Register = async (req, res) => {
    try {
        let { name, email, mobile, dob } = req;

        const param = {
            modelName: "users",
            data: req.body
        }
        const save = await storeData(param);
        console.log("save: ", save);
        

    } catch(err) {
        return res.json({ status: 0, msg: "error", data: `Some error occures: ${err.message}` });
    }
};
exports.Users = async () => {
    console.log("users are here");
};