import React from 'react'
import { Route, Routes, useMatch } from 'react-router-dom'
import Home from './pages/student/Home'
import CoursesList from './pages/student/CoursesList'
import CourseDetails from './pages/student/CourseDetails'
import MyEnrollments from './pages/student/MyEnrollments'
import Player from './pages/student/Player'
import Educator from './pages/educator/Educator'
import Dashboard from './pages/educator/Dashboard'
import StudentsEnrolled from './pages/educator/StudentsEnrolled'
import Addcourse from './pages/educator/Addcourse'
import Mycourses from './pages/educator/Mycourses'
import { Loading, Navbar } from './components/student'


const App = () => {

const isEducatorRoute = useMatch('/educator/*')

  return (
    <div className='text-default min-h-screen bg-white'>
      {!isEducatorRoute && <Navbar/> }
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/course-list' element={<CoursesList/>} />
        <Route path='/course-list/:input' element={<CoursesList/>} />
        <Route path='/course/:id' element={<CourseDetails/>} />
        <Route path='/my-enrollments' element={<MyEnrollments/>} />
        <Route path='/player/:courseId' element={<Player/>} />
        <Route path='/loading/:path' element={<Loading/>} />
        <Route path ='/educator' element={<Educator/>}>
            <Route path ='educator' element ={<Dashboard/>}/>
            <Route path ='add-course' element ={<Addcourse/>}/>
            <Route path ='my-courses' element ={<Mycourses/>}/>
            <Route path ='student-enrolled' element ={<StudentsEnrolled/>}/>
        </Route>
      </Routes>
    </div> 
  )
}

export default App