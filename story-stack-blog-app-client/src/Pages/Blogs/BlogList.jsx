import { useContext, useEffect, useState } from "react"
import BlogCard from "./BlogCard"
import { BlogContext } from "../../Context/BlogContext"

const BlogList = () => {
    const { searchTerm } = useContext(BlogContext)
    const [isLoading, setIsLoading] = useState(true)
    const [blogs, setBlogs] = useState([])
    const [showBlogs, setShowBlogs] = useState(10)
    useEffect(() => {
        fetch("http://localhost:8000/blogs")
            .then(res => res.json())
            .then(data => {
                setBlogs(data.blogs)
                setIsLoading(false)
            })
            .catch(error => console.error("Error fetching blog data: " + error))
    }, [])



    // filter blogs based on title, description and author
    const filteredBlogs = blogs.filter(blog =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.author.name.toLowerCase().includes(searchTerm.toLowerCase())
    )


    //----------Handle------More--------blogs---------
    const handleMoreBlog = () => {
        setShowBlogs(prev => prev + 3)
    }

    if(isLoading) {
        return <div className="h-20 flex items-center justify-center"><p>Loading...?</p></div>
    }

    return (
        <section className="container mx-auto py-20 px-4 lg:px-0">
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                {
                    filteredBlogs.slice(0, showBlogs).map((blog, index) => (
                        <BlogCard key={index} blog={blog} />
                    ))
                }
            </div>
            {
                showBlogs < filteredBlogs.length && (
                    <div className="mt-10 flex items-center justify-center">
                        <button
                            onClick={handleMoreBlog}
                            className="text-white bg-[#E64839] hover:bg-gray-800 py-1.5 px-5 rounded-full cursor-pointer m-auto">Show More</button>
                    </div>
                )
            }
        </section>
    )
}

export default BlogList
