import React from 'react';
import Hero from '../../components/student/Hero';
import Companies from '../../components/student/companies';
import CourseSection from '../../components/student/CourseSection';
import Testimonials from '../../components/student/Testimonials';
import CallToAction from '../../components/student/CallToAction';

const Home = () => {
  return (
    <div className="flex flex-col items-center space-y-7 text-center">
      <Hero />
      <Companies />
      <CourseSection />
      <Testimonials />
      <CallToAction/>
    </div>
  );
};

export default Home;
