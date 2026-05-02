import { auth } from "@/lib/auth";
import { Button } from "@heroui/react";
import { headers } from "next/headers";
import Link from "next/link";
import { FaEdit } from "react-icons/fa";



const MyProfilePage =async () => {

  const session = await auth.api.getSession({
    headers: await headers() 
})

console.log(session)

const user=session?.user

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">

      <div className="w-full max-w-md bg-white rounded-3xl shadow-lg overflow-hidden p-8 border border-gray-100">
        

        <div className="relative flex flex-col items-center mb-6">
          <div className="relative">
            <img 
              src={user?.image} 
              alt="Profile" 
              className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-sm"
            />
 
            <div className="absolute bottom-1 right-1 bg-white p-1.5 rounded-full shadow-md border border-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
          </div>
          
          <h2 className="mt-4 text-2xl font-semibold text-gray-800">{user?.name}</h2>
          <p className="text-gray-500 font-medium">{user?.email}</p>
          <p className="text-xs text-gray-400 mt-1 uppercase tracking-widest">Member since 2026</p>
        </div>

        <div className="border-t border-gray-50 my-6"></div>


        <div className="mb-8">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-1">Email Address</p>
          <p className="text-gray-800 font-semibold">{user?.email}</p>
        </div>

<Link href={'/my-profile/update-profile'}>      <Button fullWidth className={'bg-linear-[90deg,#6B38D4_0%,#BA0035_100%] text-white font-bold shadow-md hover:-translate-y-0.5  transition-all flex items-center justify-center gap-2'}><FaEdit/> Edit Profile </Button></Link>
      </div>


      <div className="mt-6 flex items-center gap-2 text-gray-400 text-sm font-medium">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>Need help with your profile?</span>
      </div>
    </div>
  );
};

export default MyProfilePage;