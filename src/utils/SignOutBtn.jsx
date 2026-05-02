"use client";
import { Button } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { refresh } from "next/cache";
import { usePathname, useRouter } from "next/navigation";



const SignOutBtn = ({ children }) => {
  const route = useRouter();
 const handleSignOut = async () => {


  await authClient.signOut({
    fetchOptions: {
      onSuccess: () => {
route.refresh('/') 
      },
    },
  });
};

  return (
    <Button
      onPress={handleSignOut}
      className={"bg-linear-[90deg,#6B38D4_0%,#BA0035_100%] rounded-lg"}
    >
      {children}
    </Button>
  );
};

export default SignOutBtn;
