const express = require("express");
const Blog = require("../models/blog.model");
const router = express.Router()

//---------Http Post Method----------
//---------Get all blog-----------
router.get('/', async(req, res) => {
    try {
        const blogs = await Blog.find()
        res.status(201).json({
            success: true,
            message: "views All Blogs successfully",
            blogs
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to All blogs",
            error: error.message
        });
    }
})


//---------Http Post Method----------
//---------Post a new blog-----------
router.post("/add-post", async (req, res) => {
    try {
        const newBlog = new Blog({
            ...req.body
        });
        const blog = await newBlog.save();
        res.status(201).json({
            success: true,
            message: "Blog created successfully",
            blog
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to create blog",
            error: error.message
        });
    }
});



module.exports = router