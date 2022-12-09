import React, { useState } from 'react'
import Button from './Button';
const Navbar = () => {
  let [open, setOpen] = useState(false);
  return (
    <div>
      <div className='shadow-md shadow-shadow-color w-full fixed top-0 left-0'>
        <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
          <div className=' cursor-pointer flex items-center  flex-shrink-0 font-[Poppins] 
      text-gray-800'>







            <img src={require("../assets/logo.png")} className="w-[190px] h-[57px]" alt="..." />






          </div>
          <div className='  pt-0'>
            <form className="w-full mt-4 md:mt-0  lg:pr-20 lg:w-auto  sm:pt-0 md:pl-2 px-4 md:pr-0 sm:pr-15">
              <div className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full py-3  pl-12 md:pr-72 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
                />
              </div>
            </form>
          </div>
          <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden scroll-smooth hover:scroll-auto'>
            {!open ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">

              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            }

          </div>

          <ul className={`md:flex mt-14 md:mt-0    md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>

            <li className='md:ml-8 text-xl md:my-0 my-7 '>
              <a href="#" className='custom-line-button' >Login</a>

            </li>

            <Button>
              Join
            </Button>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
