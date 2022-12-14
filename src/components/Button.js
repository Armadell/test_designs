
import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-purple-700 text-white  py-2 px-6 rounded md:ml-8 hover:bg-purple-400 
    duration-500'>
      {props.children}
    </button>
  )
}

export default Button