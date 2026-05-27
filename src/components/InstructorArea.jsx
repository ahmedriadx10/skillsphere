'use client'
import { instructorsData } from "@/data/instructor-data";

import InstructorCard from "./ui/InstructorCard";
import {motion} from 'motion/react'
const InstructorArea = () => {
  return (
    <section className="py-20  bg-linear-[#F2F3FF70,#ffffff]">
      
<div className="max-w-7xl mx-auto w-[90%]">


<motion.div whileInView={{opacity:1,y:0}} initial={{opacity:0,y:30}} transition={{duration:0.9}} viewport={{once:true,margin:'-100px'}} className="text-center space-y-4 max-w-xl w-[90%] mx-auto">
<p className="text-xs font-bold uppercase text-(--primaryViolet) tracking-[2.4px]">ELITE FACULTY</p>
<h4 className="text-4xl font-bold text-(--on-surface)">Learn From The Best</h4>
<p className="text-(--textVariant)">Our instructors are practitioners from top tech companies like Google, Meta, and
Stripe, bringing real-world expertise to your screen.</p>
</motion.div>


{/* instructors card */}

<div className="mt-16 flex justify-center items-center flex-wrap gap-6">

{instructorsData.map((instructor,inx)=><InstructorCard inx={inx} key={instructor.id} instructor={instructor}/>)}

</div>



</div>

    </section>
  );
};

export default InstructorArea;