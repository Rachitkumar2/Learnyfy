import React from 'react'
import { assets } from '../../assets/assets'
const companies = () => {
  return (
    <div className='pt-16'>
      <p className='text-base text-gray-500'>Learn From these companies</p>
      <div className='flex flex-wrap items-center justify-center gap-6 md:gap-16 md:mt-10 mt-5'>
        <img src={assets.microsoft_logo} alt="microsoft" className='w-20 md:w-28'/>
        <img src={assets.walmart_logo} alt="walmart" className='w-20 md:w-28'/>
        <img src={assets.accenture_logo} alt="accenture" className='w-20 md:w-28'/>
        <img src={assets.adobe_logo} alt="adobe" className='w-20 md:w-28'/>
        <img src={assets.paypal_logo} alt="apypal" className='w-20 md:w-28'/>
      </div>
    </div>
  )
}

export default companies