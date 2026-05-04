import { Button, Chip } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
// react-icons ইনস্টল করা না থাকলে: npm install react-icons
import { FaStar, FaPlay, FaCheckCircle, FaRegFileAlt, FaAward, FaPlayCircle } from "react-icons/fa";
import { IoPlayCircleOutline, IoVideocamOutline, IoStatsChart, IoTimeOutline } from "react-icons/io5";
import { MdOutlineScreenshot } from "react-icons/md";

const CourseDetailsShow = ({course}) => {

  const {title,description,instructor,instructor_role,rating,category,price,image,level,duration,what_will_learn,old_price,curriculum,instructor_img}=course


  return (
    <div className="">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        

        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-4">
    
            <Chip className='bg-purple-100 text-purple-700'>{category}</Chip>
            <span className="text-pink-500 flex items-center gap-1 font-bold text-sm">
              <FaStar className="mb-0.5" /> {rating}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-6 tracking-tight">
            {title}
          </h1>

          <p className="text-gray-500 text-lg mb-8 leading-relaxed max-w-2xl">
            {description}
          </p>

          <div className="flex items-center gap-4 mb-14">
            <div className="h-10 w-10">
<Image src={instructor_img} alt={instructor} width={40} height={40} className='rounded-full h-full w-full'/>

            </div>
            <div className='space-y-1'>
              <p className="font-bold text-gray-900 leading-tight">{instructor}</p>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{instructor_role}</p>
            </div>
          </div>

          {/* What You'll Learn Section */}
          <section className="mb-14">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <div className="w-1.5 h-10 bg-indigo-600 rounded-full"></div>
              What You'll Learn
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {what_will_learn.map((item, index) => (
                <div key={index} className="flex gap-4 p-5 bg-[#F9FAFF] border border-blue-50 rounded-2xl">
                  <FaCheckCircle className="text-indigo-600 mt-1 shrink-0" size={18} />
                  <p className="text-[15px] text-gray-700 font-medium">{item}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Course Curriculum Section */}
          <section>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <div className="w-1.5 h-10 bg-indigo-600 rounded-full"></div>
              Course Curriculum
            </h2>
            <div className="space-y-4">
              {curriculum.map((module,inx) => (
                <div key={inx} className="flex items-center flex-wrap sm:flex-nowrap gap-5 sm:gap-0 justify-between p-6 bg-[#EEF2FF] border border-blue-100 rounded-2xl">
                  <div className="flex items-center gap-5">
                    <span className="bg-white text-indigo-700 font-bold w-10 h-10 flex items-center justify-center rounded-xl shadow-sm text-sm">
                      {module.chapter}
                    </span>
                    <h3 className="font-bold text-slate-700 text-lg">{module.title}</h3>
                  </div>
                  <div className="text-sm text-gray-500 font-semibold flex sm:block items-center justify-end">
<span>                    {module.lessons} Lessons • {module.time}
</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

   
        <div className="lg:col-span-1 flex flex-col gap-6">
  
          <div className=" relative rounded-4xl overflow-hidden shadow-xl ">
    
<div className='relative h-75 w-full'>
  <Image src={image} alt={title} fill className='object-cover'    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 33vw"/>
</div>

             <div className="absolute inset-0  bg-black/20 flex items-center justify-center">
         
                <FaPlayCircle className=" text-6xl text-white drop-shadow-lg cursor-pointer hover:scale-110 transition-transform" />
             </div>
          </div>


          <div className="bg-white p-5 xl:p-10 rounded-4xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-4xl font-black text-gray-900">${price}</span>
              <span className="text-gray-400 line-through font-bold text-xl">${old_price}</span>
            </div>
            
       
            <Button size='lg' className={'bg-linear-[90deg,#6B38D4_0%,#BA0035_100%] text-white mb-4 w-full'}>Enroll Now</Button>

            <p className="text-center text-xs text-gray-400 font-semibold mb-10 tracking-wide">30-Day Money-Back Guarantee</p>
            
            <div className="space-y-5">
              <p className="font-bold text-sm text-gray-900 mb-2">What's Included:</p>
              <div className="flex items-center gap-4 text-gray-600 font-medium">
                <IoVideocamOutline size={22} className="text-indigo-500" /> 20 hours on-demand video
              </div>
              <div className="flex items-center gap-4 text-gray-600 font-medium">
                <MdOutlineScreenshot size={22} className="text-indigo-500" /> 12 coding exercises
              </div>
              <div className="flex items-center gap-4 text-gray-600 font-medium">
                <FaRegFileAlt size={20} className="text-indigo-500 ml-0.5" /> 24 downloadable resources
              </div>
              <div className="flex items-center gap-4 text-gray-600 font-medium">
                <FaAward size={22} className="text-indigo-500" /> Certificate of completion
              </div>
            </div>
          </div>

      
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#F3F6FF] p-8 lg:p-5 xl:p-8 rounded-[30px] flex flex-col justify-center  text-center">
              <IoStatsChart className="mx-auto text-pink-500 mb-3" size={28} />
              <p className="text-[10px] uppercase tracking-widest text-gray-400 font-black mb-1">Level</p>
              <p className="font-extrabold text-gray-800 text-lg">{level}</p>
            </div>
            <div className="bg-[#F3F6FF] p-8 lg:p-5 xl:p-8 rounded-[30px] text-center">
              <IoTimeOutline className="mx-auto text-pink-500 mb-3" size={30} />
              <p className="text-[10px] uppercase tracking-widest text-gray-400 font-black mb-1">Duration</p>
              <p className="font-extrabold text-gray-800 text-lg">{duration}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CourseDetailsShow;