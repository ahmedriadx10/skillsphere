import CourseDetailsShow from "@/components/CourseDetailsShow";
import { courseDataGet } from "@/utils/DataFetcher";
import { notFound } from "next/navigation";

const CourseDetails = async ({params}) => {

  const {id}=await params
const courseData=await courseDataGet()
  const exactCourse=courseData.find((course)=>course.id===Number(id))

  if(!exactCourse){
    notFound()
  }
 console.log(exactCourse)



  return (
    <section className="max-w-7xl mx-auto w-[90%] py-12">

<CourseDetailsShow course={exactCourse} />

    </section>
  );
};

export default CourseDetails;