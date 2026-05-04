import { courseDataGet } from "@/utils/DataFetcher";
import CourseCard from './../../../components/ui/CourseCard';
import SearchCourse from "@/components/SearchCourse";
import EmpthyCourse from "@/components/ui/EmpthyCourse";

const AllCourse = async({searchParams}) => {
  
  const courseData=await courseDataGet()
const searchParamsGet=await searchParams

const queryParams=searchParamsGet.search
const exactCourseData=queryParams?courseData.filter((course)=>course.title.toLowerCase().includes(queryParams.toLowerCase())):courseData

  
  return (
    <section className="max-w-7xl mx-auto w-[90%] py-20 space-y-12">

  <div className="text-center  space-y-4 max-w-xl w-[90%] mx-auto">

<h4 className="text-4xl font-bold text-(--on-surface)">Expand Your Expertise</h4>
<p className="text-(--textVariant)">Discover high-definition learning experiences designed to sharpen your skills and
elevate your professional trajectory through expert-led content.</p>

{/* search input here */}
</div>

{/* search input can be here dependend on layout structure */}
<div className="">

  <SearchCourse/>
</div>


<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

{exactCourseData.length===0?<EmpthyCourse searchTerm={queryParams}/>:exactCourseData.map((course)=><CourseCard key={course.id} course={course} />)}


</div>


    </section>
  );
};

export default AllCourse;