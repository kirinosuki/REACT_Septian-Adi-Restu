import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <section className='pt-20'>
        <div className='container'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
              <div>
                <h1 className='text-3xl text-[#37517e] uppercase font-semibold leading-7'>ARSHA</h1>
                <div className='text-[#444444] mt-2 text-sm'>
                  <p>A108 Adam Street</p>
                  <p>New York, NY 535022</p>
                  <p>United States</p>
                </div>
                <div className='mt-4 text-sm text-[#444444]'>
                  <p><span className='font-bold'>Phone:</span> +1 5589 55488 55</p>
                  <p><span className='font-bold'>Email:</span> info@example.com</p>
                </div>
              </div>
              <div className=''>
                <h2 className='text-base text-[#37517e] font-bold'>Usefull Links</h2>
                <ul className='mt-2 gap-1'>
                  <li>
                    <Link to='/' className='text-sm text-[#777777]'>Home</Link>
                  </li>
                  <li>
                    <Link to='/' className='text-sm text-[#777777]'>About Us</Link>
                  </li>
                  <li>
                    <Link to='/' className='text-sm text-[#777777]'>Service</Link>
                  </li>
                  <li>
                    <Link to='/' className='text-sm text-[#777777]'>Terms of Service</Link>
                  </li>
                  <li>
                    <Link to='/' className='text-sm text-[#777777]'>Privacy Policy</Link>
                  </li>
                </ul>
              </div>
              <div className=''>
                <h2 className='text-base text-[#37517e] font-bold'>Our Service</h2>
                <ul className='mt-2 gap-1'>
                  <li>
                    <Link to='/' className='text-sm text-[#777777]'>Web Design</Link>
                  </li>
                  <li>
                    <Link to='/' className='text-sm text-[#777777]'>Web Development</Link>
                  </li>
                  <li>
                    <Link to='/' className='text-sm text-[#777777]'>Product Management</Link>
                  </li>
                  <li>
                    <Link to='/' className='text-sm text-[#777777]'>Marketing</Link>
                  </li>
                  <li>
                    <Link to='/' className='text-sm text-[#777777]'>Graphic Design</Link>
                  </li>
                </ul>
              </div>
              <div className=''>
                <h2 className='text-base text-[#37517e] font-bold'>Our Social Network</h2>
                <p className='text-base text-[#444444] mt-4'>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
                <div className='mt-4 flex gap-2'>
                  <div className='w-8 h-8 bg-[#47b2e4] rounded-full'></div>
                  <div className='w-8 h-8 bg-[#47b2e4] rounded-full'></div>
                  <div className='w-8 h-8 bg-[#47b2e4] rounded-full'></div>
                  <div className='w-8 h-8 bg-[#47b2e4] rounded-full'></div>
                  <div className='w-8 h-8 bg-[#47b2e4] rounded-full'></div>
                </div>
              </div>
            </div>
           
        </div>
        <div className='mt-8 md:mt-16 py-10 space-y-4 bg-[#37517e] text-center'>
          <p className='text-white'>@ Copyright <span className='font-bold'>Arsha</span> All Rights Reserved</p>
          <p className='text-white'>Designed by<span className='font-bold text-[#47b2e4]'>Tailwind CSS</span></p>
        </div>
    </section>
  )
}

export default Footer