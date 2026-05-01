import Image from "next/image";
import scholarShipImg from "@/assets/icons/scholarship.png";
import Navlinks from "../ui/Navlinks";
import { Button } from "@heroui/react";


const Navbar = () => {
  return (
    <nav className="shadow ">
<div className="max-w-7xl mx-auto w-[90%] flex justify-between items-center py-5 ">
        {/* brand logo area */}
      <div className="flex items-center gap-2 bg-linear-[90deg,#6B38D4_0%,#BA0035_100%] bg-clip-text text-transparent">
        <Image
          src={scholarShipImg}
          alt="scholarship image"
          width={"auto"}
          height={"auto"}
        />
        <h2 className="text-xl md:text-2xl font-bold">SkillSphere</h2>
      </div>

      <ul className="hidden md:flex items-center gap-8">
        <Navlinks />
      </ul>

      <div className="hidden md:flex gap-2.5">
        <Button variant="secondary">Login</Button>
        <Button variant="secondary">Register</Button>
      </div>

      {/* <div className="md:hidden">
        <DropDownBar />
      </div> */}
</div>
    </nav>
  );
};

export default Navbar;
