const mongoose = require('mongoose');
const validatorLibrary = require('validator');

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true, minlength: 5, 
    maxlength: 100, validate: (data) => validatorLibrary.isAlphanumeric(data) },
  authors: [String],
  content: { type: String, required: true, maxlength: 1000}
}, {timestamps: true});

const BlogModel = mongoose.model('Blog', blogSchema);

module.exports = BlogModel;
