import { Chip } from "@heroui/react";
import { FaUsers } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";
import { IoMdStopwatch } from "react-icons/io";
import { LuPencilLine } from "react-icons/lu";

const LearningTips = () => {
  return (
    <section className="max-w-7xl mx-auto w-[90%] py-20" >
      
{/* learning tips intro area */}

<div className="text-center space-y-4 max-w-xl w-[90%] mx-auto">
<p className="text-xs font-bold uppercase text-(--primaryViolet) tracking-[2.4px]">KNOWLEDGE BITES</p>
<h4 className="text-4xl font-bold text-(--on-surface)">Daily Learning Tips</h4>
<p className="text-(--textVariant)">Micro-lessons and productivity hacks to accelerate your educational journey.</p>
</div>


{/* learning tips bento grid view  */}

<div className="mt-16 grid grid-cols-4  xl:grid-rows-[250px_250px] gap-5">

<div className="p-10 lg:p-15 text-center flex flex-col gap-5 justify-center items-center bg-linear-to-b from-[#6B38D420] border border-(--outline) rounded-2xl to-white col-span-full md:col-span-2 xl:col-span-2 xl:row-span-2 ">

<div className="bg-[#6B38D420] rounded-lg p-3 ">
  <IoMdStopwatch  className="text-4xl text-(--primaryViolet)"/>
</div>
<h6 className="text-xl font-medium text-(--on-surface">
  The Pomodoro Technique
</h6>
<p className="text-gray-800">Boost your focus by working in 25-minute sprints followed by a 5-minute break to prevent burnout and maintain peak cognitive performance throughout your session.</p>

<Chip className="uppercase text-(--primaryViolet) font-bold bg-[#6B38D420]">Most effective</Chip>
</div>


<div className=" p-10   flex flex-col text-center lg:text-left lg:flex-row gap-5 justify-center items-center border border-(--outline) rounded-2xl col-span-full  md:col-span-2">
  

  <div className="bg-[#BA003510] rounded-lg p-3"><GiBrain className="text-(--secondaryPink) text-4xl"  /></div>
<div className="space-y-2.5">
  <h6 className="text-xl font-medium text-(--on-surface">Spaced Repetition</h6>
<p className="text-gray-800">Review concepts at increasing intervals to encode information into long-term memory effectively.</p>
</div>

</div>

<div className="p-10 text-center flex flex-col gap-5 justify-center items-center bg-linear-[160deg,#ffffff_0%,#6B38D420_100%] border border-(--outline) rounded-2xl to-white col-span-full md:col-span-2 xl:col-span-1">
<div className="bg-[#6B38D420] rounded-full p-3">
  <LuPencilLine  className="text-4xl text-(--primaryViolet)" />
</div>
  <h6 className="text-xl font-medium text-(--on-surface">Visual Mapping</h6>
<p className="text-gray-800">Connect new information with existing mental frameworks.</p>
</div>



<div className="p-10 text-center flex flex-col gap-5 justify-center items-center bg-linear-[160deg,#ffffff_0%,#6B38D420_100%] border border-(--outline) rounded-2xl to-whit col-span-full md:col-span-2 xl:col-span-1">
<div className="bg-[#6B38D420] rounded-full p-3">
  <FaUsers  className="text-4xl text-(--primaryViolet)"/>
</div>
  <h6 className="text-xl font-medium text-(--on-surface">Active Recall</h6>
<p className="text-gray-800">Test yourself frequently. Teaching is the ultimate check.</p>
</div>

</div>



    </section>
  );
};

export default LearningTips;