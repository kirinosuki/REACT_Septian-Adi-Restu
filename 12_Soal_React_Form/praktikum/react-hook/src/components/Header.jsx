import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    
    <nav className='bg-gray-50 border-gray-200 shadow z-20 top-0 left-0 fixed w-full'>
        <div className='container'>
            <div className=' flex flex-wrap items-center justify-between mx-auto py-4'>
                <a href='/' className='flex items-center'>
                    <span className='self-center text-2xl font-semibold whitespace-nowrap'>Simple Header</span>
                </a>
                <button data-collapse-toggle='navbar-sticky' type='button' className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200' aria-controls='navbar-sticky' aria-expanded='false'>
                    <span className='sr-only'>Open main menu</span>
                    <svg className='w-5 h-5' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 17 14'>
                        <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M1 1h15M1 7h15M1 13h15'/>
                    </svg>
                </button>
                <div className='hidden w-full md:block md:w-auto' id='navbar-sticky'>
                    <ul className='font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-200/40 md:bg-transparent md:flex-row md:space-x-8 md:mt-0 md:border-0'>
                        <li>
                            <Link to='/' className='block py-2 px-4 text-white bg-[#0D6EFD] rounded md:text-white' aria-current='page'>Home</Link>
                        </li>
                        <li>
                            <Link to='/create-product' className='block py-2 px-4 md:px-0 text-[#0D6EFD] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700'>Products</Link>
                        </li>
                        <li>
                            <Link to='/create-account' className='block py-2 px-4 md:px-0 text-[#0D6EFD] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700'>Account</Link>
                        </li>
                        <li>
                            <Link to='' className='block py-2 px-4 md:px-0 text-[#0D6EFD] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700'>FAQs</Link>
                        </li>
                        <li>
                            <Link to='' className='block py-2 px-4 md:px-0 text-[#0D6EFD] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700'>About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>

  )
}

export default Header