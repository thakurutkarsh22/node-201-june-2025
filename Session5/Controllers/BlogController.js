const BlogModel = require("../Models/Blogs.model");

async function createBlog(req, res, next) {
    const body = req.body;
    const title = body.title;
    const content = body.content;

    // save this input to the the DB 
    // obj is created 
    const blogsObj = BlogModel({
        title,
        content
    })


    // save the obj

    try {
        const response = await blogsObj.save()
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