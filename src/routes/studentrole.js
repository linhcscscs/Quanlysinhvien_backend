const homeRouter = require("./home");
const loginRouter = require("./login");
const studentRouter = require("./student_management");
var express = require("express");
var router = express.Router();

router.use("/qlsv", studentRouter);
router.use("/login", loginRouter);
router.use("/", homeRouter);

module.exports = router;
