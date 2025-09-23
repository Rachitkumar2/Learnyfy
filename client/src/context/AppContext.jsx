import React, { createContext, useEffect, useState } from 'react'
import { dummyCourses } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

export const AppContext = createContext()

export const AppContextProvider = ({ children }) => {

  const currency =import.meta.env.VITE_CURRENCY
  const navigate =useNavigate()

  const [allCourses,setAllCourses]=useState([])
  const [isEdudcator,setIsEducator]=useState(true)
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

  useEffect(()=>{
    fetchAllCourses()
  },[])


  const value = {
      currency,allCourses,navigate,calculateRating,isEdudcator, setIsEducator
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}