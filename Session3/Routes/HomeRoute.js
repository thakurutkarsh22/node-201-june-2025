const express = require("express");
const { homeResponse, getContact } = require("../Controllers/HomeController");
const router = express.Router();


router.get("/", homeResponse)
router.get("/home", homeResponse)
router.get("/contacts", getContact)


module.exports = router;