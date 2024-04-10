import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full h-20 flex justify-center items-center border border-black border-solid sticky top-0 right-0'>
        <input type="text" placeholder='Search' id='searchBar' class="block w-5/12 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
    </div>
  )
}

export default Navbar;