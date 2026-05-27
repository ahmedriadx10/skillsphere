"use client";

import {motion} from 'motion/react'

// Swiper.js
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import NewReleasesCard from "./ui/NewReleasesCard";
import Link from "next/link";
import { Button } from "@heroui/react";

const NewReleases = () => {

 const popularCourse=[
  {
    id: 9,
    title: "Advanced UI/UX Design Mastery",
    instructor: "Jane Smith",
    instructor_role: "Senior Designer",
    instructor_img: "https://i.ibb.co.com/k6DY1j7w/photo-1560250097-0b93528c311a.avif",
    duration: "15 Hours",
    rating: 4.9,
    level: "Intermediate",
    category: "Design",
    description: "Master Figma, user psychology, and modern design systems to create stunning user interfaces.",
    image: "https://i.ibb.co.com/PZY2z0Pg/Chat-GPT-Image-Apr-30-2026-08-05-38-PM.png",
   
  },
  {
    id: 2,
    title: "Next Level Web Development",
    instructor: "Mezbaul Abedin Persian",
    instructor_role: "Lead Instructor (Next Level)",
    instructor_img: "https://i.ibb.co.com/RTR8g4RY/mezbaul-abedin-vaia-next-level.jpg",
    duration: "40 Hours",
    rating: 5.0,
    level: "Advanced",
    category: "Development",
    description: "Master industrial-level development with Next.js 15, TypeScript, and Modular Architecture. Designed for developers who want to reach the top 1% in the industry.",
    image: "https://i.ibb.co.com/prz0VLQz/Gemini-Generated-Image-21f28g21f28g21f2.png",
    
  },{
    id: 4,
    title: "Digital Marketing Strategy 2026",
    instructor: "David Miller",
    instructor_role: "Marketing Expert",
    instructor_img: "https://i.ibb.co.com/Zpd6knMK/marketing-instructor.avif",
    duration: "12 Hours",
    rating: 4.7,
    level: "Beginner",
    category: "Marketing",
    description: "A comprehensive guide to SEO, SEM, and Social Media Marketing for growing brands.",
    image: "https://i.ibb.co.com/vxZNMt4p/Chat-GPT-Image-Apr-30-2026-08-09-20-PM.png",

   
  }

  ]
  return (
    <section className="py-20 bg-linear-[#F2F3FF65,#ffffff] "> 
      <div className="max-w-7xl mx-auto px-6">
        
     
        <motion.div className="flex flex-col  gap-5 items-center text-center " initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} transition={{duration:0.9}} viewport={{once:true,margin:'-150px'}}>
   
  <p className="text-xs font-bold uppercase text-(--primaryViolet) tracking-[2.4px]">New Releases</p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-[#111827]  leading-tight">
            Exciting New <span className="bg-linear-[90deg,#6B38D4_0%,#BA0035_100%] text-transparent bg-clip-text">Learning</span> Paths
          </h2>
 
          <p className="max-w-3xl text-[#6B7280] text-lg leading-relaxed">
            Elevate your professional trajectory with our latest curriculum additions. From sustainable
            architecture to advanced neural networks, our newest courses are engineered by industry
            experts.
          </p>
        </motion.div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 b items-center mt-16">
          
          {/* Left Side: Swiper with SkillSphere Themed Card */}
          <div className="h-full max-w-50 sm:max-w-60 md:max-w-75 w-[90%] mx-auto lg:mx-0 ">
      <Swiper
  effect={'cards'}
  grabCursor={true}
  modules={[EffectCards]}
  className="mySwiper max-w-50 sm:max-w-60 md:max-w-75 h-100"

>


{popularCourse.map(card=><SwiperSlide style={{borderRadius:'12px'}} key={card.id}><NewReleasesCard cardData={card}/></SwiperSlide>)}
</Swiper>
          </div>

          {/* Right Side: Action & Stats with SkillSphere Colors */}
          <div className="flex flex-col gap-10">
            {/* SkillSphere themed info card */}
            <motion.div whileInView={{opacity:1,y:0}} initial={{opacity:0,y:30}} transition={{duration:0.9}} viewport={{once:true,margin:'-100px'}}  className="bg-linear-to-b from-[#6B38D420] border border-(--outline) p-10 shadow-none rounded-3xl">
              <p className="text-[#374151] text-xl mb-12 font-semibold">
                Master high-demand skills with our industry-certified curriculum designed for rapid career growth.
              </p>
              {/* Main action button: SkillSphere magenta (#A8146F) color */}
              <Link href={'/all-course'}
                
              >
              <Button size="lg" className="font-bold text-white bg-linear-[90deg,#6B38D4_0%,#BA0035_100%] text-lg flex items-center gap-2 shadow-lg ">
                  Start Learning Now <span className="text-sm">⚡</span>
              </Button>
              </Link>
            </motion.div>

            {/* Stats Grid using SkillSphere primary colors */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { label: "New Subjects", value: "15+" },
                { label: "User Rating", value: "4.9/5" },
                { label: "Support", value: "24h" }
              ].map((stat, i) => (
                <motion.div  whileInView={{opacity:1,y:0}} initial={{opacity:0,y:30}} transition={{duration:0.9}} viewport={{once:true,margin:'-100px'}} key={i}  className="py-8 bg-white border border-(--outline) text-center rounded-2xl">
                  {/* Blue like "169" price in SkillSphere */}
                  <h4 className="text-3xl font-extrabold text-(--primaryViolet)">{stat.value}</h4>
                  <p className="text-[#6B7280] font-medium text-sm mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default NewReleases;