import React from 'react'
import logo from '../../assets/logo-full.svg'

function Header() {
  return (
    <div className=' mt-10 mb-3'>
      <div className='flex justify-center items-center mb-10'>
        <img src={logo} alt="" className=' w-[200px]' />
      </div>
      <div className='flex justify-center flex-col items-center md:w-[70%] w-[90%] mx-auto text-center mt-5 gap-5'>
        <h1 className=' md:text-5xl text-3xl font-bold '>Your Journey to Coding Conf 2025 Starts Here!</h1>
        <p className=' md:text-2xl text-xl'>Secure your spot at next year's biggest coding conference</p>
      </div>
    </div>

  )
}

export default Header
