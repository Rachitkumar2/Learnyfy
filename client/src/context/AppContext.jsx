import React, { createContext, useEffect, useState } from 'react'
import { dummyCourses } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import humanizeDuration from 'humanize-duration'

export const AppContext = createContext()

export const AppContextProvider = ({ children }) => {

  const currency =import.meta.env.VITE_CURRENCY
  const navigate =useNavigate()

  const [allCourses,setAllCourses]=useState([])
  const [isEdudcator,setIsEducator]=useState(true)
  const [enrolledCourses,setenrolledCourses]=useState([])


  //Fetch All Courses
  const fetchAllCourses = async ()=>{
    setAllCourses(dummyCourses)
  }
  const calculateRating=(course)=>{
    if(!course?.courseRatings || course.courseRatings.length===0){
      return 0;
    }
    let totalRating=0
    course.courseRatings.forEach(rating=>{
      totalRating+=rating.rating;
    })
    return (totalRating/course.courseRatings.length).toFixed(1)
  }
  // calculate Course Chapter time
  const calculateChapterTime=(chapter)=>{
    let time=0
    chapter.chapterContent.map((lecture)=>time +=lecture.lectureDuration)
    return humanizeDuration(time * 60 *1000 , {units: ["h","m"]})
  }

  // calculate course duration
  const calculateCourseDuration = (course) => {
    let time = 0
    course.courseContent.map((chapter) => 
      chapter.chapterContent.map((lecture) => time += lecture.lectureDuration)
    )
    return humanizeDuration(time * 60 * 1000, {units: ["h", "m"]})
  }

  // calculate No of Lectures in Course
  const calculateNoOfLectures = (course) => {
    let totalLecture = 0;
    course.courseContent.forEach(chapter => {
      if(Array.isArray(chapter.chapterContent)){
        totalLecture += chapter.chapterContent.length
      }
    });
    return totalLecture;
  }
  //  Fetch User Enrolled Courses
  const fetchUserEnrolledCourses =async ()=>{
    setenrolledCourses(dummyCourses)
  }

  useEffect(()=>{
    fetchAllCourses()
    fetchUserEnrolledCourses()
  },[])


  const value = {
      currency,allCourses,navigate,calculateRating,isEdudcator, setIsEducator , calculateNoOfLectures ,calculateCourseDuration ,calculateChapterTime ,enrolledCourses ,fetchUserEnrolledCourses
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}