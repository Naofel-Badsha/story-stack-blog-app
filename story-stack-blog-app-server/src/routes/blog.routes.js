const express = require("express");
const Blog = require("../models/blog.model");
const { ObjectId } = require("mongodb");
const { getAllBlogs, GetASingleBlog, addedANewBlog, updatedABlog } = require("../controllers/blog.controllers");
const router = express.Router()

//---------Http Get Method----------
//---------Get all Blogs-----------
router.get('/', getAllBlogs)



//---------Http Get/:id Method----------
//---------Get a Single Blog-----------
router.get("/:id", GetASingleBlog)



//---------Http Post Method----------
//---------Post a new Blog-----------
router.post("/add-post", addedANewBlog);



//---------Http Put meain Update Method----------
//---------Put a new Blog-----------
router.put("/:id", updatedABlog)



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