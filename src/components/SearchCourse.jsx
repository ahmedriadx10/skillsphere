'use client'

import { Button, Input } from "@heroui/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {  useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchCourse = () => {
const [searchInp,setSearchInp]=useState('') 
 const path=usePathname()
 const searchParams=useSearchParams()
 const router=useRouter()
 console.log(searchInp)
const handleSearch=()=>{

const instanceParams=new URLSearchParams(searchParams)

if(searchInp){

  instanceParams.set('search',searchInp)
router.push(`${path}?${instanceParams.toString()}`)

}
else{
  instanceParams.delete('search')
  router.push(`${path}`)
}


}

  return (
    <div className="max-w-xl mx-auto flex justify-center items-center gap-2 ">
      
<Input aria-label="Name" className="rounded-lg py-3 shadow-none bg-[#94A3B810] w-[80%]" placeholder="Search Courses" value={searchInp} onChange={(e)=>setSearchInp(e.target.value)}/>
<Button size="lg" onPress={handleSearch} className={'bg-linear-[90deg,#6B38D4_0%,#BA0035_100%] max-w-max rounded-full  '} ><FaSearch /></Button>

    </div>
  );
};

export default SearchCourse;