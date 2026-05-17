import Reveal from "../../animation/Reveal"

const NewsLetter = () => {
    return (
        <Reveal>
            <section className="container mx-auto">
                <div className='mb-20 bg-no-repeat bg-cover bg-center rounded-md ' style={{ backgroundImage: `url("https://i.ibb.co.com/bM00yhZM/news-letter.png")` }}>
                    <div className='py-12 bg-black/40 rounded-md h-full flex items-center justify-center text-center'>
                        <div className='space-y-3 p-4'>
                            <h2 className='text-2xl font-bold text-white'>Sign up for our newsletter</h2>
                            <p className='text-lg text-white'>Get the latest news, updates, and offers straight to your inbox</p>
                            <button className='text-white bg-gray-800 hover:bg-[#E64839] py-1.5 px-5 rounded-full cursor-pointer m-auto font-bold py-2 px-8 rounded-full'>Sign up</button>
                        </div>
                    </div>
                </div>
            </section>
        </Reveal>
    )
}

export default NewsLetter