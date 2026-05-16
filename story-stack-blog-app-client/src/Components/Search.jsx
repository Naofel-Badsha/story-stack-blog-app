import { useContext, useState } from "react"
import { FaSearch } from "react-icons/fa"
import { BlogContext } from "../Context/BlogContext"

const Search = () => {
    const { searchTerm, setSearchTerm } = useContext(BlogContext);

    const [inputValue, setInputValue] = useState("")
    //------Input---Change-------
    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    //-------Blog---Seracch---Handler--------
    const handleSearch = () => {
        setSearchTerm(inputValue)
    }





    return (
        <div className="relative flex items-center justify-between">
            <input
                onChange={handleInputChange}

                type="text" placeholder='Search...' className='bg-gray-100 py-1.5 px-2 border-none rounded-md focus:outline-none focus:ring focus:ring-[#E64839] w-full' />
            <button
                onClick={handleSearch}
                className="absolute right-2"><FaSearch size={16} className="text-gray-400 cursor-pointer" /></button>
        </div>
    )
}

export default Search
