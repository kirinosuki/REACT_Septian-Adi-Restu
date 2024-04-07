import {React, useEffect} from 'react'
import Image from '../assets/img.png'

const AccountDetails = () => {
    useEffect(() => {
        alert('Welcome');
    });

  return (
    <section className='mt-16'>
        <div className='container mx-auto'>
            <div className='grid grid-cols-6 md:grid-cols-8 lg:grid-cols-12'>
                <div className='col-start-2 col-end-6 md:col-start-3 md:col-end-7 lg:col-start-4 lg:col-end-10'>
                    {/* Image & Title */}
                    <div className='flex flex-col gap-2 justify-center items-center'>
                        <img src={Image} alt='bs-image' />
                        <h1 className='font-bold text-4xl leading-10'>Create Account</h1>
                    </div>

                    {/* Desc */}
                    <div className='text-center mt-4 md:mt-8'>
                        <p className='mx-auto text-sm lg:text-base lg:leading-8'>Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
                    </div>

                    {/* Form */}
                    <div className='mt-2 md:mt-6'>
                        <h2 className='text-2xl font-medium leading-7'>Detail Form</h2>
                        <form className='mt-4 md:mt-6' noValidate>

                            <div className='grid grid-cols-2 gap-4 mb-4'>
                                {/* FirstName */}
                                <div>
                                    <label for='first-name' className='block mb-2 text-sm font-medium text-gray-900'>First Name</label>
                                    <input id='first-name' type='text' name='first-name' className='bg-gray-50 border text-gray-900 text-sm rounded block w-full p-2.5' />                                    
                                </div>

                                {/* LastName */}
                                <div>
                                    <label for='last-name' className='block mb-2 text-sm font-medium text-gray-900'>Last Name</label>
                                    <input id='last-name' type='text' name='last-name' className='bg-gray-50 border text-gray-900 text-sm rounded block w-full p-2.5' />                                    
                                </div>
                            </div>

                            {/* Username */}
                            <div className='mb-4'>
                                <label for='username' className='block mb-2 text-sm font-medium text-gray-900'>Username</label>
                                <div className='flex'>
                                    <span className='inline-flex items-center px-4 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-l'>@</span>
                                    <input id='username' type='text' name='username' className='flex-1 bg-gray-50 border border-l-0 border-gray-300 text-gray-900 text-sm rounded-r block w-full p-2.5' />  
                                </div>
                            </div>

                            {/* Email */}
                            <div className='mb-4'>
                                <label for='email' className='block mb-2 text-sm font-medium text-gray-900'>Email</label>
                                <input id='email' type='email' name='email' className='bg-gray-50 border text-gray-900 text-sm rounded block w-full p-2.5' />
                            </div>

                            {/* Gender */}
                            <div className='mb-4'>
                                <label for='gender' className='block mb-2 text-sm font-medium text-gray-900'>Gender</label>
                                <div className='flex items-center'>
                                    <input id='male' type='radio' name='gender' className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-[#0D6EFD]' />
                                    <label for='male' className='ml-2 text-sm font-medium text-gray-900'>Male</label>
                                </div>
                                <div className='flex items-center'>
                                    <input id='female' type='radio' name='gender' className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-[#0D6EFD]' />
                                    <label for='female' className='ml-2 text-sm font-medium text-gray-900'>Female</label>
                                </div>
                                <div className='flex items-center'>
                                    <input id='other' type='radio' name='gender' className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-[#0D6EFD]' />
                                    <label for='other' className='ml-2 text-sm font-medium text-gray-900'>Other</label>
                                </div>
                            </div>

                            {/* Address 1 */}
                            <div className='mb-4'>
                                <label for='address-1' className='block mb-2 text-sm font-medium text-gray-900'>Address 1</label>
                                <input id='address-1' type='text' name='address-1' className='bg-gray-50 border text-gray-900 text-sm rounded block w-full p-2.5' /> 
                            </div>

                            {/* Address 2 */}
                            <div className='mb-4'>
                                <label for='address-2' className='block mb-2 text-sm font-medium text-gray-900'>Address 2</label>
                                <input id='address-2' type='text' name='address-2' className='bg-gray-50 border text-gray-900 text-sm rounded block w-full p-2.5' /> 
                            </div>

                            {/* Nationality */}
                            <div className='mb-4'>
                                <label for='nationality' className='block mb-2 text-sm font-medium text-gray-900'>Nationality</label>
                                <select id='nationality' name='nationality' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#0D6EFD] focus:border-[#0D6EFD] block w-full p-2.5'>
                                    <option selected>Choose</option>
                                    <option value='indonesia'>Indonesia</option>
                                    <option value='english'>English</option>
                                </select>
                            </div>

                            {/* Language Spoken */}
                            <div className='mb-4'>
                                <div className='border-1 border-gray-300 border-top mb-1'></div>
                                <label className='block mb-2 text-sm font-medium text-gray-900'>Language Spoken</label>
                                <div className='flex items-center'>
                                    <input id='indonesia' type='checkbox' name='language' className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-[#0D6EFD]' />
                                    <label for='indonesia' className='ml-2 text-sm font-medium text-gray-900'>Indonesia</label>
                                </div>
                                <div className='flex items-center'>
                                    <input id='english' type='checkbox' name='language' className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-[#0D6EFD]' />
                                    <label for='english' className='ml-2 text-sm font-medium text-gray-900'>English</label>
                                </div>
                                <div className='flex items-center'>
                                    <input id='other-language' type='checkbox' name='language' className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-[#0D6EFD]' />
                                    <label for='other-language' className='ml-2 text-sm font-medium text-gray-900'>Other</label>
                                </div>
                            </div>

                            {/* Button Submit */}
                            <div className='mb-4'>
                                <button id='btn-submit' type='submit' className='w-full text-white bg-[#0D6EFD] hover:bg-blue-800 focus:ring-4 focus:ring-[#0D6EFD] font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AccountDetails;