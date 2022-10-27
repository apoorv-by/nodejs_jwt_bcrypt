const express = require("express");

const router = express.Router();

const controller = require("../Controller/user-controller")

// API Paths
router.post("/signUp",controller.signUp)

router.post("/login",controller.login)

// Export
module.exports = router;