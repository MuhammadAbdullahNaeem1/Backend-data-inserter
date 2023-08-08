const express = require("express");
const { validateUser } = require("../utilities/validation.js");
const { createUser } = require("../controllers/usercontroller");
const router = express.Router();

router.route("/endpoint").post(validateUser, createUser);

module.exports = router;
