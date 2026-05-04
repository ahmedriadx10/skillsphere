import { courseDataGet } from "@/utils/DataFetcher";
import PopularCourseCard from "./ui/PopularCourseCard";

const PoupularCourses = async () => {
 
  const courseData=await courseDataGet()

  const topCourse=courseData.filter(course=>course.rating===5)
  console.log(topCourse)
 
  return (
    <section className="py-20 bg-[#FAF8FF]">
      
      <div className="text-center max-w-xl w-[90%] mx-auto space-y-4">
        <h4 className="text-4xl font-bold text-(--on-surface)">Popular Courses</h4>
        <p className="text-(--textVariant)">Curated selection of our most trending and highly-rated learning experiences
this month.</p>
      </div>
{/* popular courses card */}
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-8 max-w-7xl mx-auto w-[90%] mt-16">

{topCourse.map((course)=><PopularCourseCard key={course.id} course={course}/>)}

</div>

    </section>
  );
};

export default PoupularCourses;