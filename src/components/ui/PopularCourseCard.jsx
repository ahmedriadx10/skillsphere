import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaRegClock, FaStar } from "react-icons/fa";

const PopularCourseCard = ({course}) => {
 
 const {id,title,instructor,rating,category,instructor_img,duration,price,image,description}=course

  return (
    <div className="rounded-3xl shadow flex flex-col justify-between gap-3 hover:-translate-y-1 hover:shadow-md transition-transform duration-150">

<div className="relative rounded-t-2xl border h-60 w-full  overflow-hidden">
<Image src={image} alt={title} fill  className="object-cover" loading="eager"       sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"         />
</div>



{/* rating and price area */}

<div className="flex justify-between items-center px-6">
  <p className="flex items-center gap-1 text-orange-600 font-bold "><FaStar className="text-xl"/> <span>{rating===5.0?rating+'.0':rating}</span></p>
  <h6 className="font-bold text-2xl text-(--primaryViolet)">${price}</h6>
</div>

{/* title and description area */}

<div className=" space-y-2 px-6">

<h3 className="text-xl text-(--on-surface) font-semibold">{title}</h3>
<p className="line-clamp-2 text-(--textVariant)  leading-5">{description}</p>
</div>



{/* instructor and duration area */}

<div className="flex justify-between  pb-5 px-6">

<div className="flex gap-2 items-center">
    <Image src={instructor_img} alt={instructor} width={32} height={32} className="rounded-full"/>
<p className="font-semibold text-[#334155]">{instructor}</p>
</div>

<p className="flex gap-1 items-center text-[#94A3B8]"> <FaRegClock /> {duration}</p>

</div>


{/* card action area */}

<div className="mb-6  px-6">

<Link href={`/course-details/${id}`}> <Button className={'w-full bg-linear-[90deg,#6B38D4_0%,#BA0035_100%] rounded-xl'} >View Details</Button> </Link>

</div>



    </div>
  );
};

export default PopularCourseCard;