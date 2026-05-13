
import { Link } from 'react-router-dom'

const BlogCard = ({ blog }) => {
    return (
        <div className='border-gray-200 rounded-lg p-4 bg-white shadow-md'>
            <Link to={`/blogs/${blog?._id}`}>
                <div className="overflow-hidden rounded-md mb-4">
                    <img
                        src={blog.image}
                        alt="blog image"
                        className="w-full h-48 object-cover rounded-md cursor-pointer transition-transform duration-300 hover:scale-110"
                    />
                </div>
            </Link>
            <div>
                <p className='bg-secondary/5 inline-block text-sm text-secondary px-3 py-1 rounded-md mb-3'>Technology</p>
                <Link to={`/blogs/${blog?._id}`}>
                    <h3 className='text-xl font-semibold text-gray-800 hover:text-[#E64839] mb-2'>{blog.title}</h3>
                </Link>
                <p className='text-gray-500'>{`${blog.description.substring(0, 100)}`}...</p>

                <div className='mt-4 flex items-center'>
                    <img src={blog.author.image} alt="" className='size-10 rounded-full mr-3' />
                    <div>
                        <p className='text-sm text-gray-600'>{blog.author.name}</p>
                        <p className='text-xs text-gray-400'>
                            {
                                blog?.date ? <span>{new Date(blog.date).toLocaleDateString()}</span> : <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
                            }</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCard