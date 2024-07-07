import React from 'react'

const Button = ({children, className, ...props}) => {
  return (
    <button
        className={`w-28 h-3/4 rounded-md text-clr bg-primary grid place-content-center border-2 border-blue-500 ml-5 hover:bg-hover transition-colors duration-300 ease-in-out border-none ${className}`}
        {...props}
    >
        {children}
    </button>
  )
}

export default Button
