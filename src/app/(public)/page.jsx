import Hero from '@/components/Hero';
import InstructorArea from '@/components/InstructorArea';
import LearningTips from '@/components/LearningTips';
import NewReleases from '@/components/NewReleases';


import PoupularCourses from '@/components/PoupularCourses';
import { StudentImpact } from '@/components/StudentImpact';


const HomePage = () => {
  return (
    <div>

      <Hero/>
      <NewReleases/>
      <PoupularCourses/>
      <LearningTips/>

      <InstructorArea/>
      <StudentImpact/>
    </div>
  );
};

export default HomePage;