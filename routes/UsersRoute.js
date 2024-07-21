const router = require("express").Router();
const { Users, Register } = require("../controllers/Users/UsersController");

router.post("/register", Register);
router.get("/", Users);

module.exports = router;