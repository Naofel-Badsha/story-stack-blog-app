const express = require("express");
const Blog = require("../models/blog.model");
const { ObjectId } = require("mongodb");
const router = express.Router()

//---------Http Post Method----------
//---------Get all Blogs-----------
router.get('/', async (req, res) => {
    try {
        const blogs = await Blog.find().sort({ createdAt: -1 })
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
//---------Get a Single Blog-----------
router.get("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const blog = await Blog.findById(id)
        //---------If don't find blog--------
        if (!blog) {
            return res.status(404).json({
                success: false,
                message: "Blog not found"
            });
        }
        res.status(201).json({
            success: true,
            message: "views Single Blogs successfully",
            blog
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to Single blogs",
            error: error.message
        });
    }

})




//---------Http Post Method----------
//---------Post a new Blog-----------
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