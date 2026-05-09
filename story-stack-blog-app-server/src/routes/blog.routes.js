const express = require("express");
const Blog = require("../models/blog.model");
const router = express.Router()

router.get('/', (req, res) => {
    res.send('From Blog Routes')
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