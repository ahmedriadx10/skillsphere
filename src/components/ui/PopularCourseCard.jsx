import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaRegClock, FaStar } from "react-icons/fa";

const PopularCourseCard = ({course}) => {
 
 const {id,title,instructor,rating,category,instructor_img,duration,price,image,description}=course

  return (
    <div className="rounded-3xl shadow ">

<div className="relative rounded-t-2xl h-60 overflow-hidden">
<Image src={image} alt={title}  className="object-cover w-full" loading="eager"         width={'540'} height={'540'}      />
</div>

<div className="flex flex-col justify-between gap-4  p-6">

{/* rating and price area */}

<div className="flex justify-between items-center">
  <p className="flex items-center gap-1 text-orange-600 font-bold "><FaStar className="text-xl"/> <span>{rating===5.0?rating+'.0':rating}</span></p>
  <h6 className="font-bold text-2xl text-(--primaryViolet)">${price}</h6>
</div>

{/* title and description area */}

<div className=" space-y-2">

<h3 className="text-xl text-(--on-surface) font-bold">{title}</h3>
<p className="line-clamp-3 text-(--textVariant)  leading-5">{description}</p>
</div>



{/* instructor and duration area */}

<div className="flex justify-between border-b border-[#E2E8F0] pb-5">

<div className="flex gap-2 items-center">
    <Image src={instructor_img} alt={instructor} width={32} height={32} className="rounded-full"/>
<p className="font-semibold text-[#334155]">{instructor}</p>
</div>

<p className="flex gap-1 items-center text-[#94A3B8]"> <FaRegClock /> {duration}</p>

</div>


{/* card action area */}

<div className="mt-2">

<Link href={`/course-details/${id}`}> <Button className={'w-full bg-linear-[90deg,#6B38D4_0%,#BA0035_100%] rounded-xl'} >View Details</Button> </Link>

</div>

</div>

    </div>
  );
};

export default PopularCourseCard;