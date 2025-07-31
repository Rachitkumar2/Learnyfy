import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import CourseCard from './CourseCard'

const CourseSection = () => {
  const { allCourses } = useContext(AppContext)

  return (
    <section className="py-16 md:px-40 px-8">
      <h2 className="text-3xl font-medium text-gray-800">Learn From Best</h2>
      <p className="text-sm md:text-base text-gray-500 mt-3">
        Learn in-demand skills in programming, design, marketing, and more with hands-on projects.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-0 md:my-16 my-10">
       { allCourses?.slice(0, 4).map((course,index) => <CourseCard key={index} course={course}/> )}
      </div>

      <Link
        to="/course-list"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="inline-block text-gray-500 border border-gray-500/30 px-10 py-3 rounded"
      >
        Show All Courses
      </Link>
    </section>
  )
}

export default CourseSection
