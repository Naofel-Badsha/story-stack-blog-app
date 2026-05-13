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

module.exports = {
    getAllBlogs
}