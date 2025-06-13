const express = require("express");
const { createBlog, deleteBlogById, getAllBlogs, getBlogById } = require("../Controllers/BlogController");
const { BlogValidationMiddleware } = require("../Middlewares/InputCheckMiddlewares/BlogValidationMiddleware");

const router = express.Router();


router.post("/newBlog", BlogValidationMiddleware, createBlog)
router.delete("/delete/:id", deleteBlogById)
router.get("/getAllBlogs", getAllBlogs)
router.get("/getBlog/:id", getBlogById)


module.exports = router;