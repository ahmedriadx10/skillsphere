import { courseDataGet } from "@/utils/DataFetcher";
import CourseCard from './../../../components/ui/CourseCard';

const AllCourse = async() => {
  
  const courseData=await courseDataGet()

console.log(courseData)
  
  return (
    <section className="max-w-7xl mx-auto w-[90%] py-20">

  <div className="text-center mb-16 space-y-4 max-w-xl w-[90%] mx-auto">

<h4 className="text-4xl font-bold text-(--on-surface)">Expand Your Expertise</h4>
<p className="text-(--textVariant)">Discover high-definition learning experiences designed to sharpen your skills and
elevate your professional trajectory through expert-led content.</p>

{/* search input here */}
</div>

{/* search input can be here dependend on layout structure */}


<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

{courseData.map((course)=><CourseCard key={course.id} course={course} />)}


</div>


    </section>
  );
};

export default AllCourse;