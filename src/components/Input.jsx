import React, { useId } from 'react'

const Input = React.forwardRef(function input({
    label,
    type = "text",
    className = "",
    placeholder = "",
    ...props
}, ref) {

    const id = useId();
    return (
        <div className='w-full'>
            {label && <label
                htmlFor={id}
                className='inline-block mb-1 pl-1 font-bold text-lg'>
                {label}
            </label>
            }
            <input
                type={type}
                className={`w-full px-3 py-2 text-[#292929] bg-white/20 rounded-lg outline-none focus:bg-gray-50 duration-200 border border-[#afdde5] focus:outline-none focus:ring-2 focus:ring-[#4FD1C5] p-3 backdrop-blur-sm ${className}`}
                placeholder={placeholder}
                ref={ref}
                {...props}
                id={id}
            />
        </div>
    )
})

export default Input;