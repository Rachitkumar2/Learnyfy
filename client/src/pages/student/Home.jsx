import React from 'react'
import Hero from '../../components/student/hero'
import Companies from '../../components/student/companies'
const Home = () => {
  return (
    <div className='flex flex-col items-center space-y-7 text-center'>
      <Hero />
      <Companies />
    </div>
  )
}

export default Home 