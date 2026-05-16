import NewsLetter from "../Home/NewsLetter"


const About = () => {
  return (
    <section className='py-20 pb-5'>
      <div className='container mx-auto px-4 text-primary'>
        {/* hero */}
        <div className='flex items-center justify-center text-center mb-20 md:min-h-[300px] h-80 w-full bg-center bg-cover rounded-xl' style={{ backgroundImage: `url("https://i.ibb.co.com/9kVqMZt9/imageye-imgi-453-modern-dark-theme-background-with-abstract-geometric-shapes-1106493-429548.webp")` }}>
          <div className="text-white p-6">
            <h1 className='text-4xl font-semibold'>About Us</h1>
          <p className='mt-5'>Learn more about our company, our mission, Dolorum nam libero obcaecati. Earum veniam debitis, repellendus omnis fugit sequi?</p>
          </div>[]
        </div>

        {/* mission */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-20'>
          <div>
            <h2 className='text-3xl text-gray-900 dark:text-white font-semibold mb-4'>Our Mission</h2>
            <p className='mb-4 text-gray-700 dark:text-gray-400'>We are dedicated to providing the best solutions for our customers by focusing on quality, innovation, and customer satisfaction. Our mission is to help you succeed in the digital age by delivering reliable and impactful digital products and services.</p>
            <p className="text-gray-700 dark:text-gray-400">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa nulla porro minima qui facilis ipsam molestiae sint mollitia facere ullam fugit, tenetur sunt ducimus debitis dolorem iusto blanditiis consequuntur maxime!</p>
          </div>
          <div className="overflow-hidden rounded-lg">
            <img src="https://i.ibb.co.com/H0n2Xd4/imageye-imgi-249-blog1768558037.webp" alt="" className='w-full md:h-96 rounded-lg shadow-lg hover:scale-110 duration-5000' />
          </div>
        </div>

        {/* vission */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-20'>
          <div className='order-1 md:order-2'>
            <h2 className='text-3xl font-semibold mb-4 text-gray-900 dark:text-white'>Our Vission</h2>
            <p className='mb-4 text-gray-700 dark:text-gray-400'>We are dedicated to providing the best solutions for our customers by focusing on quality, innovation, and customer satisfaction. Our mission is to help you succeed in the digital age by delivering reliable and impactful digital products and services.</p>
            <p className="text-gray-700 dark:text-gray-400">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa nulla porro minima qui facilis ipsam molestiae sint mollitia facere ullam fugit, tenetur sunt ducimus debitis dolorem iusto blanditiis consequuntur maxime!</p>
          </div>
          <div className='order-2 md:order-1 overflow-hidden rounded-lg'>
            <img src="https://i.ibb.co.com/d0m1pZfn/imageye-imgi-138-Ma-SH-Automation-graphic.webp" alt="" className='w-full md:h-96 rounded-lg shadow-lg hover:scale-110 transition-all duration-500' />
          </div>
        </div>

        {/* team section */}
        <div className="pb-20">
          <h2 className='text-3xl font-semibold text-center mb-12'>Meet Our Team</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
            <div className='bg-white p-6 rounded-lg shadow-lg text-center hover:scale-95 border-[1px] border-gray-100 hover:border-[#E64839] transition-all duration-700 cursor-pointer'>
              <img src="https://i.ibb.co.com/cMp1hnM/imageye-imgi-22-team-2-1.webp" alt="" className='w-32 h-32 rounded-full mx-auto mb-4' />
              <h3 className='text-xl text-gray-700'>Sarah Jenkins</h3>
              <p className='text-gray-500 mt-2 text-sm'>Chief Executive Officer</p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-lg text-center hover:scale-95 border-[1px] border-gray-100 hover:border-[#E64839] transition-all duration-200 cursor-pointer'>
              <img src="https://i.ibb.co.com/MDp6DjxW/imageye-imgi-24-team-2-3.webp" alt="" className='w-32 h-32 rounded-full mx-auto mb-4' />
              <h3 className='text-xl text-gray-700'>David Miller</h3>
              <p className='text-gray-500 mt-2 text-sm'>Operations Manager</p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-lg text-center hover:scale-95 border-[1px] border-gray-100 hover:border-[#E64839] transition-all duration-200 cursor-pointer'>
              <img src="https://i.ibb.co.com/4RGRQLQQ/imageye-imgi-25-team-2-4.webp" alt="" className='w-32 h-32 rounded-full mx-auto mb-4' />
              <h3 className='text-xl text-gray-700'>Dr. Arifin Ahmed</h3>
              <p className='text-gray-500 mt-2 text-sm'>Founder & Director</p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-lg text-center hover:scale-95 border-[1px] border-gray-100 hover:border-[#E64839] transition-all duration-200 cursor-pointer'>
              <img src="https://i.ibb.co.com/JFy9xXx4/imageye-imgi-23-team-2-2.webp" alt="" className='w-32 h-32 rounded-full mx-auto mb-4' />
              <h3 className='text-xl text-gray-700'>Jessica Williams</h3>
              <p className='text-gray-500 mt-2 text-sm'>Marketing Head</p>
            </div>
          </div>
        </div>
        <NewsLetter />
      </div>
    </section>
  )
}

export default About
