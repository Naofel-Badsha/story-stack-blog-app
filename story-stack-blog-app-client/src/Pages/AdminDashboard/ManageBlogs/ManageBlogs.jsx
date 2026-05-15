import { Link } from "react-router"
import { useEffect, useState } from "react"
import { FaEdit, FaEye } from "react-icons/fa"
import { MdDelete } from "react-icons/md"
import axios from "axios"


const ManageBlogs = () => {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then(res => res.json())
      .then(data => setBlogs(data.blogs)
      )
      .catch(error => console.log(error))
  }, [])



  //-------------Deleted Blog-----------
  const handleDeleteBlog = async (id) => {
    //------Feleted------Confirmation----------
    if (window.confirm("Are you sure want to delete")) {
      try {
        const response = await axios.delete(`http://localhost:8000/blogs/${id}`)
        if (response.status === 200) {
          setBlogs(blogs.filter(blog => blog._id !== id))
          alert("Blog Deleted SuccessFully")
        }
      } catch (error) {
        console.log("Error Deleting blog:" + error)
      }
    }
  }



  return (
    <section>
      <h1 className="text-3xl text-center py-10">Manage All Blogs: {blogs.length}</h1>
      <div>
        {
          blogs.length > 0 ? (
            <table className="w-full text-left table-auto min-w-max">
              <thead>
                <tr className='bg-gray-100'>
                  <th className="p-4 border-b border-slate-600 ">
                    <p className="text-[18px] font-normal leading-none ">
                      No
                    </p>
                  </th>
                  <th className="p-4 border-b border-slate-600 ">
                    <p className="text-[18px] font-normal leading-none ">
                      Title
                    </p>
                  </th>
                  <th className="p-4 border-b border-slate-600 ">
                    <p className="text-[18px] font-normal leading-none ">
                      Author
                    </p>
                  </th>
                  <th className="p-4 border-b border-slate-600 ">
                    <p className="text-[18px] font-normal leading-none">
                      Date
                    </p>
                  </th>
                  <th className="p-4 border-b border-slate-600 b">
                    <p className="text-[18px] font-normal leading-none ">
                      Actions
                    </p>
                  </th>
                </tr>
              </thead>
              <tbody>

                {
                  blogs.map((blog, index) => (
                    <tr key={index} className="">
                      <td className="p-4 border-b border-slate-700">
                        <p className="text-sm  font-semibold">
                          {index + 1}.
                        </p>
                      </td>
                      <td className="p-4 border-b border-slate-700">
                        <p className="text-sm  font-semibold">
                          {blog.title}
                        </p>
                      </td>
                      <td className="p-4 border-b border-slate-700">
                        <p className="text-sm ">
                          {blog.author.name}
                        </p>
                      </td>
                      <td className="p-4 border-b border-slate-700">
                        <p className="text-sm ">
                          {
                            blog?.date ? <span>{new Date(blog.date).toLocaleDateString()}</span> : <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
                          }
                        </p>
                      </td>
                      <td className="p-4 text-sm border-b border-slate-700 space-x-2">
                        <Link to={`/blogDetails/${blog._id}`} >
                          <button className='bg-blue-500 text-white px-2 py-1 hover:bg-blue-600 cursor-pointer'><FaEye size={20} /></button>
                        </Link>
                        <Link to={`/dashboard/updateBlog/${blog._id}`}>
                          <button className='bg-yellow-500 text-white px-2 py-1 hover:bg-yellow-600 cursor-pointer'><FaEdit size={20} /></button>
                        </Link>
                        <Link>
                          <button onClick={() => handleDeleteBlog(blog?._id)} className='bg-red-500 text-white px-2 py-1 hover:bg-red-600 cursor-pointer'><MdDelete size={20} /></button>
                        </Link>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          ) : <div>No data found!</div>
        }

      </div>
    </section>
  )
}

export default ManageBlogs
