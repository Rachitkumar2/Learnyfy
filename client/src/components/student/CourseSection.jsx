import React from 'react'
import { Link } from 'react-router-dom'

const CourseSection = () => {
  return (
    <div className='py-16 md:px-40 px-8'>
      <h2 className='text-3xl font-medium text-gray-800'>Learn From Best</h2>
      <p className='text-sm md:text-base text-gray-500 mt-3'>Learn in-demand skills in programming, design, marketing, and more with hands-on projects.</p>

    

      <Link to={'/course-list'}onClick={()=>scrollTo(0,0)}className='text-gray-500 border-gray-500/30 px-10 py-3 rounded'>Show All Courses</Link>
    </div>
  )
}

export default CourseSection