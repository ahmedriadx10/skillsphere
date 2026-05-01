import Hero from '@/components/Hero';
import InstructorArea from '@/components/InstructorArea';
import LearningTips from '@/components/LearningTips';
import PoupularCourses from '@/components/PoupularCourses';
import React from 'react';

const HomePage = () => {
  return (
    <div>

      <Hero/>
      <PoupularCourses/>
      <LearningTips/>
      <InstructorArea/>
    </div>
  );
};

export default HomePage;