export const LoginHandle=(e)=>{

  e.preventDefault()

const formData=new FormData(e.currentTarget)

const exactFormData=Object.fromEntries(formData.entries())

console.log('log in form data',exactFormData)



}