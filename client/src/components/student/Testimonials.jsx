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
            <div key={index}>
              <div>
                <img src={Testimonial.image}alt={Testimonial.name} />
                <div>
                  <h1>{Testimonial.name}</h1>
                  <p>{Testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
};

export default Testimonials;
