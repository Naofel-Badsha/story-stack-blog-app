import { useForm } from "react-hook-form"
import InputField from "../AddBlog/InputField"
import TextAreaField from "../AddBlog/TextAreaField"
import { useNavigate, useParams } from "react-router"
import { useEffect } from "react"
import axios from "axios"

const UpdateBlog = () => {
  const { id } = useParams()
  const navgate = useNavigate()

  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm();

  useEffect(() => {
    const fetchSingleBlog = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/blogs/${id}`)
        const blog = response.data.blog

        setValue("title", blog?.title);
        setValue("description", blog?.description);
        setValue("authorName", blog?.author?.name);
        setValue("authorImages", blog?.author?.image);
        setValue("image", blog?.image);
      } catch (error) {
        console.log("Faild To  fetch blog", + error)
      }
    }

    fetchSingleBlog()
    // reset()
  }, [])



  const onSubmit = async (data) => {
    const blogData = {
      title: data.title,
      description: data.description,
      image: data.image,
      author: {
        name: data.authorName,
        image: data.authorImages
      }
    }
    console.log("Blog data updateed", blogData)
    try {
      const response = await axios.put(`http://localhost:8000/blogs/${id}`, blogData)
      console.log(response.data)
      if (response.status === 200) {
        alert("Blog Create SuccessFully")
        navgate("/")
        reset()
      }

    } catch (error) {
      console.log("Update Faild To Blog", + error)
    }



  }
  return (
    <section>
      <div>
        <h1 className="text-3xl text-center py-10">Update Blog</h1>
      </div>
      <div className='flex flex-col lg:flex-row gap-8'>
        <div className='flex-1 space-y-4 bg-gray-100'>
          <img src="https://i.ibb.co.com/s9RBm9jQ/anete-lusina-zws-Hjak-E-i-I-unsplash.jpg" alt="" className='w-full h-full rounded-xl object-cover' />
        </div>
        <div className="flex-1">
          <form onSubmit={handleSubmit(onSubmit)} className='bg-white p-6 rounded-lg shadow-md'>
            {/*---------Input------1--------*/}
            <InputField label="Blog Title"
              id="title"
              type="text"
              register={register("title", { required: true })}
              placeholder="Blog Title"
            />
            {/*---------Input------2--------*/}
            <InputField label="Author Name"
              id="authorName"
              type="text"
              register={register("authorName", { required: true })}
              placeholder="Author Name"
            />
            {/*---------Input------3--------*/}
            <InputField label="Author Images Url"
              id="authorImages"
              type="url"
              register={register("authorImages", { required: true })}
              placeholder="Author Images Url"
            />
            {/*---------Input------4--------*/}
            <InputField label="Blog Images Url"
              id="image"
              type="url"
              register={register("image", { required: true })}
              placeholder="Blog Images Url"
            />
            <TextAreaField
              label="Blog Description"
              id="description"
              type="text"
              register={register("description", { required: true })}
              placeholder="Blog Description"
            />

            <div>
              <button
                type='submit'
                className='w-full bg-[#E64839] text-white py-2 px-4 rounded-lg hover:bg-gray-800 cursor-pointer'>Update Blog</button>
            </div>
          </form>
        </div>
      </div>
    </section>

  )
}

export default UpdateBlog
