const BlogModel = require("../Models/Blogs.model");
const { createBlogService } = require("../Services/BlogService");

async function createBlog(req, res, next) {
    // log here -> splunk or datadog  
    const body = req.body;
    const title = body.title;
    const content = body.content;


    try {
        console.log("before createBlogService", title, content)
        const response = await createBlogService(title,content );
        console.log("after createBlogService", title, response)

        res.status(201).json(response);
    } catch(error) {
        res.status(500).json(error);
    }
}

function getAllBlogs(req, res, next) {
    console.log("some string", req)
}

function getBlogById(req, res, next) {

}

function deleteBlogById(req, res, next) {

}

module.exports = {createBlog, getAllBlogs, getBlogById, deleteBlogById};