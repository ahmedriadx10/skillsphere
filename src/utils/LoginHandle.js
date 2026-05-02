import { authClient } from "@/lib/auth-client"

export const loginHandle=async (e)=>{

  e.preventDefault()

const formData=new FormData(e.currentTarget)

const exactFormData=Object.fromEntries(formData.entries())

console.log('log in form data',exactFormData)

const { data, error } = await authClient.signIn.email({
    
    
   ...exactFormData,
        callbackURL: "/",
})

console.log({data,error})

  //  if (data) {
  //     toast.success("Sign Up Successfull");
  //   }

  //   if (error) {
  //     toast.danger(`${error.message}`);
  //     console.log(error);
  //   }

}