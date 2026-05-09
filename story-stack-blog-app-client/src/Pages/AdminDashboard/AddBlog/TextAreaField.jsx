

const TextAreaField = ({ label, id, placeholder, register }) => {
    return (
        <div>
            <label htmlFor="message" className='block text-gray-700 text-sm font-bold mb-2'>
                {label}
            </label>
            <textarea
                rows="4"
                id={id}
                type="text"
                {...register}
                className='px-4 py-2 w-full border-gray-200 border-[1px] rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#E64839]'
                placeholder={placeholder}
            ></textarea>
        </div>
    )
}

export default TextAreaField