const express = require("express");
const Blog = require("../models/blog.model");
const { ObjectId } = require("mongodb");
const { getAllBlogs, GetASingleBlog, addedANewBlog, updatedABlog, deleteASingleBlog } = require("../controllers/blog.controllers");
const router = express.Router()


//---------Http Get all Blogs-----------
router.get('/', getAllBlogs)

//---------Http Get a Single Blog-----------
router.get("/:id", GetASingleBlog)

//---------Http Post a new Blog-----------
router.post("/add-post", addedANewBlog);

//---------Put a new Blog-----------
router.put("/:id", updatedABlog)

//---------Http Delete a Single Blog-----------
router.delete("/:id", deleteASingleBlog)


module.exports = router