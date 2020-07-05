const express = require('express')
const router = express.Router()
const herosRouter = require("./heros");
// const usersRouter = require("./users")

router.use("/heros", herosRouter);
// router.use("/users", usersRouter);

module.exports = router;