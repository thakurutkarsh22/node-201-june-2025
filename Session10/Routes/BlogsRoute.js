const express = require("express");
const { createBlog, deleteBlogById, getAllBlogs, getBlogById } = require("../Controllers/BlogController");
const { BlogValidationMiddleware } = require("../Middlewares/InputCheckMiddlewares/BlogValidationMiddleware");
const { Authorize } = require("../Middlewares/Authorization");

const router = express.Router();


const passport = require("passport");
// 
const PassportAuthMiddleware = passport.authenticate("jwt", { session: false, failureRedirect: "/login" })


router.post("/newBlog", BlogValidationMiddleware, createBlog)
router.delete("/delete/:id", deleteBlogById)
router.get("/getAllBlogs", PassportAuthMiddleware, getAllBlogs)
router.get("/getBlog/:id", getBlogById)


module.exports = router;