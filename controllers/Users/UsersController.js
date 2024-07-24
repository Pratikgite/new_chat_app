const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Users = require("../../models/UsersModel");
const { storeData, fetchSingleData, fetchData } = require("../../database/mongo_crud");

exports.Register = async (req, res) => {
    try {
        let { name, email, mobile, dob, password } = req.body;
        let hashPassword = await bcrypt.hash(password, 10);

        let data = {
            name,
            email,
            mobile,
            dob,
            password: hashPassword
        };

        const param = {
            modelName: "users",
            data
        }
        const save = await storeData(param);
        if(save) {
            console.log("save: ", save);
            return res.json({ status: 1, msg: "success", data: save });
        } else {
            return res.json({ status: 0, msg: "error", data: `Some error occures: Data not saved` });
        }
    } catch(err) {
        return res.json({ status: 0, msg: "error", data: `Some error occures: ${err.message}` });
    }
};

exports.Login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const param = {
            modelName: "users",
            where: { email }
        };
        const user = await fetchSingleData(param);
        
        // check email and password
        if(!user || !(await bcrypt.compare(password, user.password))) {
            return res.json({ status:0, msg: "error", data: `Some error occures: Invalid email or password` });
        }

        const token = jwt.sign({ UserAuth: user }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return res.json({ status:1, msg: "success", data: token });
    } catch(err) {
        return res.json({ status:0, msg: "error", data: `Some error occures: ${err.message}` });
    }
}

exports.Users = async (req, res) => {
    try {
        let data = [];
        const param = {
            modelName: "users",
            where: { isActive: 1 }
        };
        const user = await fetchData(param);
        if(user.length > 0) {
            for (const value of user) {
                data.push({
                    name: value.name,
                    email: value.email,
                    mobile: value.mobile,
                    dob: value.dob,
                });
            }
            return res.json({ status:1, msg: "success", data });
        } else {
            return res.json({ status:0, msg: "error", data: `No users exists.` });
        }
    } catch (err) {
        return res.json({ status:0, msg: "error", data: `Some error occures: ${err.message}` });
    }
};