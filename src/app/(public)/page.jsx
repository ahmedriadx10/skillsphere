import Hero from '@/components/Hero';
import InstructorArea from '@/components/InstructorArea';
import LearningTips from '@/components/LearningTips';
import PoupularCourses from '@/components/PoupularCourses';
import { StudentImpact } from '@/components/StudentImpact';
import React from 'react';

const HomePage = () => {
  return (
    <div>

      <Hero/>
      <PoupularCourses/>
      <LearningTips/>
      <InstructorArea/>
      <StudentImpact/>
    </div>
  );
};

export default HomePage;