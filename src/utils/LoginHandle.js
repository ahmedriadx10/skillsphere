import { authClient } from "@/lib/auth-client"
import { toast } from "@heroui/react"

export const loginHandle=async (e)=>{

  e.preventDefault()

const formData=new FormData(e.currentTarget)

const exactFormData=Object.fromEntries(formData.entries())



const { data, error } = await authClient.signIn.email({
    
    
   ...exactFormData,
        callbackURL: "/",
}, {
  onSuccess: (ctx) => {
            toast.success("Log in Successfull");
        }
})




    if (error) {
      toast.danger(`${error.message}`);
      console.log(error);
      return
    }

}