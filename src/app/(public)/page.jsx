import Hero from '@/components/Hero';
import LearningTips from '@/components/LearningTips';
import PoupularCourses from '@/components/PoupularCourses';
import React from 'react';

const HomePage = () => {
  return (
    <div>

      <Hero/>
      <PoupularCourses/>
      <LearningTips/>
    </div>
  );
};

export default HomePage;