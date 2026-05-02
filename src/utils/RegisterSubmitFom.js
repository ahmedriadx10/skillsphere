export const SubmitRegister=(e)=>{
  e.preventDefault()

 const formData=new FormData(e.currentTarget)

  const exactFromData=Object.fromEntries(formData.entries())
console.log(exactFromData)

}