const BlogModel = require("../Models/Blogs.model");

class BlogService {

    static async createBlogService(title, content) {

        const blogsObj = BlogModel({
            title,
            content,
        })

        try {
            const response = await blogsObj.save()
            return response;
        } catch(error) {
            return error;
        }
    }

}

module.exports = BlogService