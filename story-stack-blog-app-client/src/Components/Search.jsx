import { FaSearch } from "react-icons/fa"

const Search = () => {
    return (
        <div className="relative flex items-center justify-between">
            <input type="search" placeholder='Search...' className='bg-gray-100 py-1.5 px-2 border-none rounded-md focus:outline-none focus:ring focus:ring-[#E64839] w-full' />
            <FaSearch size={16} className="text-gray-400 absolute right-2" />
        </div>
    )
}

export default Search
