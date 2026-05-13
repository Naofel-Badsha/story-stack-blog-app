const express = require("express");
const Blog = require("../models/blog.model");
const { ObjectId } = require("mongodb");
const { getAllBlogs } = require("../controllers/blog.controllers");
const router = express.Router()

//---------Http Get Method----------
//---------Get all Blogs-----------
router.get('/', getAllBlogs)



//---------Http Get/:id Method----------
//---------Get a Single Blog-----------
router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
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



//---------Http Put meain Update Method----------
//---------Put a new Blog-----------
router.put("/:id", async (req, res) => {
    try {
        const { id } = req.params
        const updatedBlog = await Blog.findByIdAndUpdate (id, req.body, { new: true})
        //---------If don't put blog--------
        if (!updatedBlog) {
            return res.status(404).json({
                success: false,
                message: "Blog not found"
            });
        }
        res.status(200).json({
            success: true, 
            message: "Blog Update successfully",
            updatedBlog
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to Updating blog",
            error: error.message
        });
    }

})



//---------Http Delete Method----------
//---------Delete a Single Blog-----------
router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params
        const blog = await Blog.findByIdAndDelete(id)
        //---------If don't find blog--------
        if (!blog) {
            return res.status(404).json({
                success: false,
                message: "Blog not found"
            });
        }
        res.status(200).json({
            success: true,
            message: "Deleted Single Blog successfully",
            blog
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Deleted Single Blog Failed",
            error: error.message
        });
    }
})



module.exports = router