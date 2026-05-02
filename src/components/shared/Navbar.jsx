import Image from "next/image";
import scholarShipImg from "@/assets/icons/scholarship.png";
import Navlinks from "../ui/Navlinks";
import { Avatar, Button } from "@heroui/react";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import SignOutBtn from "@/utils/SignOutBtn";
import Link from "next/link";
import  { MobileMenu } from "../ui/MobileMenu";


const Navbar =async () => {

  const session = await auth.api.getSession({
    headers: await headers() // you need to pass the headers object.
})



  return (
    <nav className=" shadow ">
<div className="max-w-7xl mx-auto w-[90%] flex justify-between items-center py-4 ">
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

      <div className="hidden md:block ">
 
 {session?.user?<div className="flex gap-2.5 items-center">
    <Avatar className="outline-2 outline-(--outline)" size="lg">
        <Avatar.Image  alt={session?.user?.name} className="" src={session?.user?.image} referrerPolicy="no-referrer"/>
        <Avatar.Fallback>{session?.user?.name.slice(0,2).toUpperCase()}</Avatar.Fallback>
      </Avatar>
  
  <SignOutBtn >Sign out</SignOutBtn></div>: <div className="flex gap-4"><Link href={'/login'}>
  <Button variant="ghost" className={'rounded-lg bg-linear-[90deg,#6B38D4_0%,#BA0035_100%] bg-clip-text text-transparent font-semibold '}>Login</Button></Link>
  <Link href={'/register'}>
   <Button  className={'bg-linear-[90deg,#6B38D4_0%,#BA0035_100%] rounded-lg'}>Sign up</Button></Link>
       </div>}
      </div>

      <div className="flex gap-2.5 items-center md:hidden">
     {session?.user &&    <Avatar className="outline-2 outline-(--outline)" size="lg">
        <Avatar.Image  alt={session?.user?.name} className="" src={session?.user?.image} referrerPolicy="no-referrer"/>
        <Avatar.Fallback>{session?.user?.name.slice(0,2).toUpperCase()}</Avatar.Fallback>
      </Avatar>}
       <MobileMenu/>


      </div>
</div>
    </nav>
  );
};

export default Navbar;
