import React from 'react'

function Button({
  children,
  type = 'submit',
  className = '',
  ...props

}) {
  return (
    <button {...props} type={type} className={`${className} px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl
      hover:bg-blue-700 hover:-translate-y-0.5
      active:translate-y-0
      transition-all duration-200
      shadow-md hover:shadow-lg
      disabled:opacity-50 disabled:cursor-not-allowed`}>{children}</button>
  )
}

export default Button