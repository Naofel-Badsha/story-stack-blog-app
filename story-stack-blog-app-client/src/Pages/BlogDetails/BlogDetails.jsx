import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router"

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/blogs/${id}`)
        setBlog(response.data.blog)
        setIsLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
    fetchBlog()
  }, [])

  if (isLoading) {
    return <div className="flex items-center justify-center"><img src="https://i.ibb.co.com/zVFWbD7P/03-19-26-213-512.gif" alt="Loading" className="w-[100px]" /></div>
  }



  console.log(blog)
  console.log("Single blog id", id)

  return (
    <section className="container m-auto py-20 px-4 lg:px-0">
      <div>
        <h2 className='text-3xl font-bold mb-4'>{blog?.title}</h2>
        <div className='flex items-center mb-4'>
          <img src={blog?.author?.image} alt="" className='w-10 h-10 rounded-full mr-3' />
          <div>
            <p className='text-lg font-medium'>{blog?.author?.name}</p>
            <p className='text-gray-500'>    {new Date(blog?.createdAt).toLocaleString('en-GB', {
              day: 'numeric',
              month: 'numeric',
              year: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit',
              hour12: true,
            })}</p>
          </div>

        </div>
        <img src={blog?.image} alt="" className='w-full md:h-[580px] rounded-md object-cover mb-4' />
        <div className='space-y-4'>
          <p>{blog?.description}</p>
        </div>
      </div>
    </section>
  )
}

export default BlogDetails
