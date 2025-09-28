import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import Loading from '../../components/student/Loading'
import { assets } from '../../assets/assets'
import humanizeDuration from 'humanize-duration'

const CourseDetails = () => {

  const {id} =useParams()

  const [courseData , setCourseData] = useState(null)

  const {allCourses , calculateRating , calculateNoOfLectures ,calculateCourseDuration ,calculateChapterTime } = useContext(AppContext)

  const fetchCourseData = async () => {
   if (allCourses.length > 0) {
     const findCourse = allCourses.find(course => course._id === id)
     setCourseData(findCourse);
   }
  }

  useEffect(() => {
    fetchCourseData()
  }, [allCourses, id])

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

           <div className='pt-8 text-gray-800'>
               <h2 className='text-xl font-semibold '>Course Structure</h2>

               <div className='pt-5 '>
                {courseData.courseContent.map((chapter ,index)=>(
                  <div key={index} className='border border-gray-300 bg-white mb-2 rounded'>
                    <div className='flex items-center justify-between px-4 py-3 cursor-pointer select-none'>
                      <div className='flex items-center gap-2'>
                        <img src={assets.down_arrow_icon} alt="arrow icon" />
                        <p className='font-medium md:text-base text-sm' >{chapter.chapterTitle}</p>
                      </div>
                      <p className='text-sm md:text-default'>{chapter.chapterContent.length} lectures - {calculateChapterTime(chapter)}</p>
                    </div>

                    <div className='overflow-hidden transition-all duration-3000 max-h-96'>
                      <ul className='list-disc md:pl-10 pl-4 pr-4 py-2 text-gray-600 border-t border-gray-300'>
                        {chapter.chapterContent.map((lecture , index)=>(
                          <li key={index} className='flex items-start gap-2 py-1' >
                            <img src={assets.play_icon} alt="play_icon"  className='w-4 h-4 mt-1'/>
                            <div className='flex items-center justify-between w-full text-gray-800 text-xs md:text-default'>
                              <p>{lecture.lectureTitle}</p>
                              <div className='flex gap-2'>
                                {lecture.isPreviewFree && <p className='text-blue-500 cursor-pointer'>Preview</p>}
                                <p>{humanizeDuration(lecture.lectureDuration * 60*1000, {units : ['h' ,'m']})}</p>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>
                ))}

               </div>

           </div>
          
         
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