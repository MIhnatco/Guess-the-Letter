import React from 'react'

function Button({children, color = "bg-gray-500", ...rest }){
    return <button className={`px-6 py-3 ${color} rounded-md md:text-xl shadow-md focus:outline-none hover:cursor-pointer`} {...rest}>{children}</button>
}


export default Button;