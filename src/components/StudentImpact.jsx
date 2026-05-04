'use client'
// import Swiper core and required modules
import {  Autoplay, FreeMode, Grid } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { studentFeedBack } from '@/data/student-feedback';
import StudentFeedBackCard from './ui/StudentFeebackCard';

export const StudentImpact= () => {
  return (
<section className='py-20 '>

<div className="text-center mb-16 space-y-4 max-w-xl w-[90%] mx-auto">
<p className="text-xs font-bold uppercase text-(--primaryViolet) tracking-[2.4px]">STUDENT IMPACT</p>
<h4 className="text-4xl font-bold text-(--on-surface)">Success Stories</h4>
<p className="text-(--textVariant)">Discover how our learners are transforming their careers and reaching new
heights with SkillSphere.</p>
</div>

{/* swiper manage */}
    <Swiper
      // install Swiper modules
      modules={[Autoplay,FreeMode]}
      spaceBetween={20}
      slidesPerView={'auto'}
loop={true}
  // autoplay={{
  //   delay:0,
  //   disableOnInteraction:false
  // }}
  autoplay
  freeMode={true}

      speed={3000}
    >

{[...studentFeedBack,...studentFeedBack].map((feedback,inx)=><SwiperSlide style={{width:'350px'}}><StudentFeedBackCard key={inx} impactData={feedback} ></StudentFeedBackCard></SwiperSlide>)}


    </Swiper>

</section>
  );
};