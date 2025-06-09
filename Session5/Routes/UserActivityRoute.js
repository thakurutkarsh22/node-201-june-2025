const express = require("express");
const { getAllUSers, getUserByGender, getUserByUserName } = require("../Controllers/UserActivityController");
const { Authorize } = require("../Middlewares/Authorization");
const router = express.Router();


router.get("/getAllUsers", Authorize , Authorize, Authorize, Authorize, Authorize, getAllUSers )
router.get("/search", Authorize, getUserByGender)
router.get("/:username/",  getUserByUserName)



module.exports = router;