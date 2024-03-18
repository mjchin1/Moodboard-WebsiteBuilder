const express = require("express");
const router = express.Router();

router.use("/websites", require("./websiteContent"));

router.use("/users", require("./users"));

router.use("/userWebsites", require("./userWebsites"));

module.exports = router;