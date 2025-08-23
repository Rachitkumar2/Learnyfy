
import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <footer className='bg-gray-900 md:px-36 text-left w-full mt-10'>
      <div className=''>
          <div>
            <img src={assets.logo_light} alt="logo" />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem tenetur, numquam et deleniti rerum quod nesciunt ipsa illum excepturi aut.</p>
          </div>
          <div></div>
          <div></div>
      </div>
      <p>Copyright 2025 &copy; Learnyfy </p>
    </footer>
  )
}

export default Footer
