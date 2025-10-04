import {
  Hero,
  Companies,
  CourseSection,
  Testimonials,
  CallToAction,
  Footer
} from '../../components/student';


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
