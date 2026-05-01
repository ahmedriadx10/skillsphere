import { Button, Chip } from "@heroui/react";

import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  const gradientBg='bg-linear-[90deg,#6B38D4_0%,#BA0035_100%] bg-clip-text text-transparent'
  return (
    <section className="max-w-7xl pl-7 md:pl-8 mx-auto my-12  rounded-2xl  shadow-sm w-[90%] bg-[linear-gradient(90deg,rgba(255,255,255,1),rgba(255,255,255,0.9),rgba(255,255,255,0)),url(/skillsphere-banner.png)] py-40 bg-no-repeat bg-center bg-cover"  >
    

    {/* hero area main infor */}
    <div className="max-w-xl w-[90%] space-y-5.75">
      <Chip className="tracking-wider text-(--primaryViolet) bg-[#efe9f7]">The Future of Learning is Here</Chip>
      <div>
<div className="text-3xl space-y-2.5 md:text-4xl  lg:text-5xl text-(--on-surface) font-extrabold">
        <h2 className="  ">Master Any Skill with

</h2>
<h2 className={`${gradientBg} inline`}>SkillSphere</h2>
</div>

      </div>
      
<p className="text-zinc-700 leading-7.25">Elevate your career through high-definition interactive
courses designed by industry titans. Experience a learning
environment where academic rigor meets creative energy.</p>
{/* hero buttons area */}


<div className="flex gap-5 flex-wrap">
<Button className='bg-linear-[90deg,#6B38D4_0%,#BA0035_100%] rounded-xl ' >Explore All Courses <FaArrowRight /></Button>
<Button className={`rounded-xl border border-(--primary-light) text-(--primaryViolet)`} variant="tertiary">Watch Preview</Button>

</div>

    </div>
    </section>
  );
};

export default Hero;