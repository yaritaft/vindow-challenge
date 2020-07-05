const express = require('express')
const router = express.Router()
const herosRouter = require("./heros");

router.use("/heros", herosRouter);

module.exports = router;