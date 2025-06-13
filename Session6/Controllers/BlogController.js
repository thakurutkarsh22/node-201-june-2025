const BlogModel = require("../Models/Blogs.model");
const { createBlogService } = require("../Services/BlogService");

async function createBlog(req, res, next) {
    const body = req.body;
    const title = body.title;
    const content = body.content;


    try {
        const response = await createBlogService(title,content );
        res.status(201).json(response);
    } catch(error) {
        res.status(500).json(error);
    }
}

function getAllBlogs(req, res, next) {

}

function getBlogById(req, res, next) {

}

function deleteBlogById(req, res, next) {

}

module.exports = {createBlog, getAllBlogs, getBlogById, deleteBlogById};