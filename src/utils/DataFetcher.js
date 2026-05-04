export const courseDataGet=async ()=>{
try{
  const res=await fetch('http://localhost:3000/course.json')

if(!res.ok){
  throw new Error('Failed to get Response')
}

const courseData=await res.json()

return courseData

}
catch(error){

  return error.message

}

}