const router = require("express").Router();
const { Users, Register } = require("../controllers/Users/UsersController");
const { validate, UserRegister } = require("../services/validation");

router.post("/register", UserRegister(), validate, Register);
router.get("/", Users);

module.exports = router;