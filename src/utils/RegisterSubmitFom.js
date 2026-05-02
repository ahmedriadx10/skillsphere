export const SubmitRegister=(e)=>{
  e.preventDefault()

  const formData=new FormData(e.target)

  const exactFromData=Object.entries(formData.entries())

  console.log(exactFromData)
}