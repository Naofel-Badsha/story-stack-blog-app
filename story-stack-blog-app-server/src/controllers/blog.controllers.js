const express = require("express");
const Blog = require("../models/blog.model");

//---------Get all Blogs-----------
const getAllBlogs = async (req, res) => {
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
}




//---------Get a Single Blog-----------
const GetASingleBlog = async (req, res) => {
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

}



//---------Post a new Blog-----------
const addedANewBlog = async (req, res) => {
    try {
        const newBlog = new Blog({
            ...req.body
        })
        const blog = await newBlog.save();
        res.status(200).json({
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
}


//---------Updated a Blog-----------
const updatedABlog = async (req, res) => {
    try {
        const { id } = req.params
        const updatedBlog = await Blog.findByIdAndUpdate(id, req.body, { new: true })
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

}



//---------Delete a Single Blog-----------
const deleteASingleBlog = async (req, res) => {
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
}



module.exports = {
    getAllBlogs,
    GetASingleBlog,
    addedANewBlog,
    updatedABlog,
    deleteASingleBlog
}