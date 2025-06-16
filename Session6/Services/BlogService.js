const BlogModel = require("../Models/Blogs.model");

class BlogService {

    static async createBlogService(title, content) {

        const blogsObj = BlogModel({
            title,
            content,
        })

        try {
            // log
            console.log("bofore createBlogService", title, content)
            const response = await blogsObj.save()
            console.log("after createBlogService save", response)

            return response;
        } catch(error) {
            // log 
            return error;
        }
    }

}

module.exports = BlogService