import React from 'react'
import heroImage from '../assets/img2.png'

const Hero = () => {
  return (
    <section className='h-screen flex justify-center items-center bg-[#37517e]'>
        <div className='container'>
            <div className='grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-16'>
                <div className='order-2 lg:order-1 text-center lg:text-left'>
                    <h1 className='text-white lg:max-w-md text-3xl lg:text-5xl font-bold leading-[36px] md:leading-[48px] tracking-wide'>Better Solutions For Your Business</h1>
                    <p className='text-[#FFFFFF99] text-base lg:text-2xl leading-6 tracking-[0.1px] mt-2'>We are team of talented designers making websites with Bootstrap</p>
                    <div className='flex gap-4 mt-4 justify-center lg:justify-start'>
                        <button className='bg-[#47b2e4] py-2 px-6 rounded-full text-white text-base tracking-[1px]' type="">Get Started</button>
                        <button className='py-2 px-6 text-base text-white tracking-[1px]' type="">Watch Video</button>
                    </div>
                </div>
                <div className='order-1 lg:order-2'>
                    <div className=''>
                        <img className='mx-auto' src={heroImage} alt='hero-image' />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero