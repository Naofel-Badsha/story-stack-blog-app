

const InputField = ({label, id, type, placeholder, register}) => {
    return (
        <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>{label}</label>
            <input type={type} {...register} placeholder={placeholder} id={id} className='w-full px-4 py-2 border-gray-200 border-[1px] rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#E64839]' />
        </div>
    )
}

export default InputField
