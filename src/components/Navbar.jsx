import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full min-h-20 bg-white flex flex-wrap justify-between items-center px-4 sm:px-8'>
  <img src='' alt='' className="h-12" />

  {/* Responsive Navigation */}
  <div className="flex sm:hidden">
    {/* Hamburger Menu Icon */}
    <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500 focus:bg-gray-100 transition duration-150 ease-in-out">
      <svg className="block h-6 w-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 6h16M4 12h16m-7 6h7"></path>
      </svg>
    </button>
  </div>

  {/* Main Navigation */}
  <ul className='hidden sm:flex space-x-4'>
    <li><a href="#" className='text-sm'>Home</a></li>
    <li><a href="#" className='text-sm'>About</a></li>
    <li><a href="#" className='text-sm'>Our Services</a></li>
    <li><a href="#" className='text-sm'>Contact</a></li>
    <li><a href="#" className='text-sm'>Blog</a></li>
  </ul>

  {/* Call to Action */}
  <ul className="hidden sm:flex items-center space-x-4">
    <li><a href="#" className='text-sm'>Login</a></li>
    <li><a href="#" className='text-sm bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full'>Download</a></li>
  </ul>
</nav>

  )
}

export default Navbar