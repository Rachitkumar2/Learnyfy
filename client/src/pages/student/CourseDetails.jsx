import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import Loading from '../../components/student/Loading'
import { assets } from '../../assets/assets'

const CourseDetails = () => {

  const {id} =useParams()

  const [courseData , setCourseData] = useState(null)

  const {allCourses , calculateRating} = useContext(AppContext)

  const fetchCourseData = async () => {
   const findCourse = allCourses.find(course => course._id === id)
   setCourseData(findCourse);
  }

  useEffect(() => {
    fetchCourseData()
  }, [])

  return  courseData ? (
    <>
    <div className='relative min-h-screen bg-gradient-to-br from-blue-200 via-cyan-100 to-purple-100'>
      <div className='flex md:flex-row flex-col-reverse gap-10 items-start justify-between md:px-36 px-8 md:pt-30 pt-20 text-left relative z-10'>
        {/* left column */}
        <div className='flex-1 bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg'>
          <h1 className='text-4xl font-bold text-gray-800 mb-4'>
            {courseData?.courseTitle || 'Course Title'}
          </h1>
          <p className='text-gray-600' dangerouslySetInnerHTML={{__html: courseData?.courseDescription?.slice(0,200) + '...' || 'Course description will appear here...'}}></p>
           
           {/* review and rating */}
           <div className='flex items-center space-x-2 pt-3 pb-1  mb-3'>
             <p>{calculateRating(courseData)}</p>
             <div className='flex' >
               {[...Array(5)].map((_, i) => (
                 <img key={i} src={i<Math.floor(calculateRating(courseData)) ? assets.star:assets.star_blank} alt="" 
                 className='w-3.5 h-3.5'/>
               ))}
             </div>
             <p className='text-gray-500'>({courseData?.courseRatings?.length || 0})</p>
           </div>
           <p className='text-sm'>Course By <span className='text-blue-600 underline'>John</span></p>
          
         
        </div>
        {/* right column */}
        <div className='flex-1 bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg min-h-64'>
          <h3 className='text-xl font-semibold mb-4'>Course Information</h3>
          <p>Right column content here...</p>
        </div>
      </div>
    </div>
    </>
  ) : <Loading />
}

export default CourseDetails;