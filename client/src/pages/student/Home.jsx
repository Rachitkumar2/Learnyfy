import Hero from '../../components/student/Hero.jsx';
import Companies from '../../components/student/Companies.jsx';
import CourseSection from '../../components/student/CourseSection.jsx';
import Testimonials from '../../components/student/Testimonials.jsx';
import CallToAction from '../../components/student/CallToAction.jsx';
import Footer from '../../components/student/Footer.jsx';


const Home = () => {
  return (
    <div className="flex flex-col items-center space-y-7 text-center">
      <Hero />
      <Companies />
      <CourseSection />
      <Testimonials />
      <CallToAction/>
      <Footer />
    </div>
  );
};

export default Home;
