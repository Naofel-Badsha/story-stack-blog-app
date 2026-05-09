import { FaClock, FaEnvelopeOpen, FaMap, FaPhone } from "react-icons/fa"
const Contact = () => {
  return (
    <section className='pt-20 pb-5'>
      <div className='container mx-auto px-4'>
        {/* hero */}
        <div className='flex items-center justify-center text-center mb-20 md:min-h-[300px] h-80 w-full bg-center bg-cover rounded-xl' style={{ backgroundImage: `url("https://i.ibb.co.com/tM2XBzcN/imageye-imgi-121-ai-chip-hovers-above-hand-600nw-2675149399.webp")` }}>
          <h2 className='text-3xl font-semibold text-center mb-12 text-white'>Get In Touch</h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-8'>
          <div className='space-y-4 bg-gray-100'>
            <img src="https://i.ibb.co.com/6JTSFGG9/contact-animation.gif" alt="" className='w-full' />
          </div>

          <div>
            <form className='bg-white p-6 rounded-lg shadow-md'>
              <div className='mb-4'>
                <label htmlFor="name" className='block text-gray-700 text-sm font-bold mb-2'>Name</label>
                <input type="text" placeholder='Your Name' name='name' id='name' className='w-full px-4 py-2 border-gray-200 border-[1px] rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#E64839]' />
              </div>
              <div className='mb-4'>
                <label htmlFor="email" className='block text-gray-700 text-sm font-bold mb-2'>Email</label>
                <input type="text"
                  placeholder='Your email'
                  name='email' id='email' className='w-full px-4 py-2 border-gray-200 border-[1px] rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#E64839]' />
              </div>
              <div className='mb-4'>
                <label htmlFor="number" className='block text-gray-700 text-sm font-bold mb-2'>Phone Number</label>
                <input type="text" placeholder='Your phone number' name='number' id='number' className='w-full px-4 py-2 border-gray-200 border-[1px] rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#E64839]' />
              </div>
              <div className='mb-4'>
                <label htmlFor="text" className='block text-gray-700 text-sm font-bold mb-2'>Address</label>
                <input type="text" placeholder='Your Address' name='number' id='number' className='w-full px-4 py-2 border-gray-200 border-[1px] rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#E64839]' />
              </div>
              <div className='mb-4'>
                <label htmlFor="message" className='block text-gray-700 text-sm font-bold mb-2'>Message</label>
                <textarea
                  rows="4"
                  className='w-full px-4 py-2 border-gray-200 border-[1px] rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#E64839]'
                  placeholder='Enter message'
                ></textarea>
              </div>

              <div>
                <button
                  type='submit'
                  className='w-full bg-[#E64839] text-white py-2 px-4 rounded-lg hover:bg-gray-800 cursor-pointer'>Send Message</button>
              </div>
            </form>
          </div>
        </div>


        {/*-------------Contact Info---------------*/}
        <div className="py-20">
          <h3 className='text-3xl font-semibold text-center'>Contact Information</h3>
          <p className="text-center">Feel free to reach out to us through the form or the contact information below:</p>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10'>
            <div className='bg-white p-6 rounded-lg shadow-lg text-center hover:scale-95 border-[1px] border-gray-100 hover:border-[#E64839] transition-all duration-700 cursor-pointer'>
              <div className="bg-[#E64839] w-15 h-15 m-auto flex items-center justify-center rounded-full">
                <FaEnvelopeOpen className='text-white text-2xl' />
              </div>
              <h3 className='text-xl text-gray-700 mt-3'>Email</h3>
              <p className='text-gray-500 mt-2 text-sm'>info@example.com</p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-lg text-center hover:scale-95 border-[1px] border-gray-100 hover:border-[#E64839] transition-all duration-200 cursor-pointer'>
              <div className="bg-[#E64839] w-15 h-15 m-auto flex items-center justify-center rounded-full">
                <FaPhone className='text-white text-2xl' />
              </div>
              <h3 className='text-xl text-gray-700 mt-3'>Phone</h3>
              <p className='text-gray-500 mt-2 text-sm'>+1 (123) 456-7890</p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-lg text-center hover:scale-95 border-[1px] border-gray-100 hover:border-[#E64839] transition-all duration-200 cursor-pointer'>
              <div className="bg-[#E64839] w-15 h-15 m-auto flex items-center justify-center rounded-full">
                <FaMap className='text-white text-2xl' />
              </div>
              <h3 className='text-xl text-gray-700 mt-3'>Address</h3>
              <p className='text-gray-500 mt-2 text-sm'>F1234 Street Name, City, Country</p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-lg text-center hover:scale-95 border-[1px] border-gray-100 hover:border-[#E64839] transition-all duration-200 cursor-pointer'>
              <div className="bg-[#E64839] w-15 h-15 m-auto flex items-center justify-center rounded-full">
                <FaClock className='text-white text-2xl' />
              </div>
              <h3 className='text-xl text-gray-700 mt-3'>Time</h3>
              <p className='text-gray-500 mt-2 text-sm'>Sun-Thu 9:00Pm - 8:00Am</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
