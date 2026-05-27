import { Avatar, Button, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaRegClock, FaStar } from "react-icons/fa";
import {motion} from 'motion/react'
const PopularCourseCard = ({course,inx}) => {
 
 const {id,title,instructor,rating,category,instructor_img,duration,price,image,description}=course

  return (
    <motion.div initial={{opacity:0,y:30}} viewport={{once:true,margin:'-50px'}} whileInView={{opacity:1,y:0}} transition={{duration:0.9,delay:inx*0.15}}   className="rounded-3xl shadow flex flex-col justify-between gap-3 hover:-translate-y-1 hover:shadow-md transition-transform duration-150">

<div className="relative rounded-t-2xl border h-60 w-full  overflow-hidden">
<Image src={image} alt={title} fill  className="object-cover" loading="eager"       sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"         />

<Chip  className="backdrop-blur-3xl bg-[#ffffff10] text-accent absolute  right-2 top-2 uppercase tracking-widest  ">{category}</Chip>

</div>



{/* rating and price area */}

<div className="flex justify-between items-center px-6">
  <p className="flex items-center gap-1 text-orange-600 font-bold "><FaStar className="text-xl"/> <span>{rating===5?rating+'.0':rating}</span></p>
  <h6 className="font-bold text-2xl text-(--primaryViolet)">${price}</h6>
</div>

{/* title and description area */}

<div className=" space-y-2 px-6">

<h3 className="text-xl text-(--on-surface) font-semibold">{title}</h3>
<p className="line-clamp-2 text-(--textVariant)  leading-5">{description}</p>
</div>



{/* instructor and duration area */}

<div className="flex justify-between flex-wrap gap-4 pb-5 px-6">

<div className="flex gap-2 items-center">
    {/* <Image src={instructor_img} alt={instructor} width={32} height={'32'} className="rounded-full aspect-square"/> */}
      <Avatar>
        <Avatar.Image alt={instructor} src={instructor_img} />
        <Avatar.Fallback>{instructor[0].concat(instructor[1]).toUpperCase()}</Avatar.Fallback>
      </Avatar>
<p className="font-semibold text-[#334155]">{instructor}</p>
</div>

<p className="flex gap-1 items-center text-[#94A3B8]"> <FaRegClock /> {duration}</p>

</div>


{/* card action area */}

<div className="mb-6  px-6">

<Link href={`/course-details/${id}`}> <Button className={'w-full bg-linear-[90deg,#6B38D4_0%,#BA0035_100%] rounded-xl'} >View Details</Button> </Link>

</div>



    </motion.div>
  );
};

export default PopularCourseCard;