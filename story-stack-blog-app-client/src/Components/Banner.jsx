
const Banner = () => {
    return (
        <section className="container mx-auto pt-20 px-4 lg:px-0">
            <div className="md:min-h-[500px] h-80 w-full bg-center bg-cover rounded-xl" style={{ backgroundImage: `url("https://i.ibb.co.com/Rkyccd9j/blog-0.png")` }}>
                <div className="flex flex-col h-full justify-end p-5 text-white">
                    <span className="bg-[#E64839] w-fit px-4 py-1 rounded-md mb-3">
                        Technology
                    </span>
                    <h2 className="sm:text-3xl text-2xl font-bold md:w-1/2 mb-5">The Impact of Technology on the Workplace: How Technology is Changing</h2>
                    <div className="flex flex-wrap items-center space-x-2">
                        <img src="https://i.ibb.co.com/35C4hyGd/author.png" alt="" />
                        <div className="flex flex-wrap items-center space-x-2">
                            <span className='ml-2 text-base cursor-pointer hover:underline underline-offset-2'>Tracey Wilson</span>     
                            <span className='ml-2 text-base cursor-pointer hover:underline underline-offset-2'>August 20, 2024</span>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner
