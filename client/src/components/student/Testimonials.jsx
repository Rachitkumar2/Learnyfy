import React from 'react';
import { dummyTestimonial } from '../../assets/assets';

const Testimonials = () => {
  return (
    <div className='pb-14 px-8 md:px-0'>
      <h2 className='text-3xl font-medium text-gray-800'>Testimonials</h2>
      <p className='md:text-base text-gray-500 mt-3'>
        "Enrolling in this program was the best decision for my career.
        The hands-on projects and expert instructors gave me the confidence and skills to secure my dream job in tech. Highly recommend to anyone looking to level up!</p>
        <div>
          {dummyTestimonial.map((Testimonial,index)=>(
            <div key={index} className='text-sm text-left border border-gray-500/30 pb-6 rounded-lg bg-white'>
              <div className='flex items-center gap-4 px-5 py-4 bg-gray-500/10'>
                <img className='h-12 w-12 rounded-full' src={Testimonial.image}alt={Testimonial.name} />
                <div>
                  <h1 className='text-lg font-medium text-gray-800'>{Testimonial.name}</h1>
                  <p className='text-gray-800/80'>{Testimonial.role}</p>
                </div>
                <div className='p-5 pb-7'>
                 <div className='flex gap=0.5'>
                  {[...Array(5).map((_, i)=>(
                    <img className='h-5' key={i}src={i<Math.floor(Testimonial.rating) ? assets.star:assets.star_blank} alt="star" />
                  ))]}
                </div>
                <p className='text-gray-500 mt-5'>{Testimonial.feedback}</p>
                </div>
              </div>
            </div>
          ))}
       </div>
    </div>   
  );
};

export default Testimonials;
