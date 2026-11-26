import React, { useId } from 'react'

function Input({
  label,
  type = 'text',
  placeholder = '',
  className = '',
  ...props

}) {
  const Id = useId()
  return (
    <div>
      <label htmlFor={Id}>{label}</label>
      <input type={type} id={Id} placeholder={placeholder} className={`${className} w-full px-4 py-3 bg-white border border-gray-300 rounded-lg
        text-gray-900 placeholder:text-gray-400 text-sm
        outline-none transition-all duration-200
        focus:border-blue-500 focus:ring-4 focus:ring-blue-100
        hover:border-gray-400
        disabled:bg-gray-100 disabled:cursor-not-allowed`} {...props} />
    </div>
  )
}

export default Input