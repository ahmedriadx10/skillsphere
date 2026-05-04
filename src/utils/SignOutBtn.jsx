"use client";
import { Button, toast } from "@heroui/react";
import { authClient } from "@/lib/auth-client";

import { usePathname, useRouter } from "next/navigation";
import { MdLogout } from "react-icons/md";



const SignOutBtn = ({ children }) => {
  const route = useRouter();
 const handleSignOut = async () => {


  await authClient.signOut({
    fetchOptions: {
      onSuccess: () => {
route.refresh('/') 
toast.success('Sign out successfull')
      },
    },
  });
};

  return (
    <Button
      onPress={handleSignOut}
      className={"bg-linear-[90deg,#6B38D4_0%,#BA0035_100%] rounded-lg"}
    >
        <MdLogout /> {children}
    </Button>
  );
};

export default SignOutBtn;
