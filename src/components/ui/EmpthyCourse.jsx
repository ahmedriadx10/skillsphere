'use client'
import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { HiOutlineSearchCircle } from "react-icons/hi";

const EmpthyCourse = ({ searchTerm }) => {
  const router=useRouter()
  return (
    <div className="flex flex-col items-center justify-center py-10 col-span-full ">
      <HiOutlineSearchCircle className="text-gray-300 text-7xl mb-2" />
      <p className="text-gray-500 text-lg">
        No results found for <span className="font-bold">"{searchTerm}"</span>
      </p>
      <Button 
        onClick={() => router.push('/all-course')}
        className="mt-2 bg-linear-[90deg,#6B38D4_0%,#BA0035_100%] "
      >
        Clear Search
      </Button>
    </div>
  );
};

export default EmpthyCourse;