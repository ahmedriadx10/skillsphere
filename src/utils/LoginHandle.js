import { authClient } from "@/lib/auth-client"

export const loginHandle=async (e)=>{

  e.preventDefault()

const formData=new FormData(e.currentTarget)

const exactFormData=Object.fromEntries(formData.entries())



const { data, error } = await authClient.signIn.email({
    
    
   ...exactFormData,
        callbackURL: "/",
})



   if (data) {
      toast.success("Log in Successfull");
      return
    }

    if (error) {
      toast.danger(`${error.message}`);
      console.log(error);
      return
    }

}