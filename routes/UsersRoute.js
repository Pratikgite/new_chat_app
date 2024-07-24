const router = require("express").Router();
const { Users, Register, Login } = require("../controllers/Users/UsersController");
const { validate, UserRegister, UserLogin } = require("../services/validation");
const { verifyToken } = require("../middlewares/authMiddleware");

router.post("/register", UserRegister(), validate, Register);
router.post("/login", UserLogin(), validate, Login);
router.get("/", verifyToken, Users);

module.exports = router;