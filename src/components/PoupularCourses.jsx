
import PopularCourseCard from "./ui/PopularCourseCard";




const PoupularCourses =  () => {

  const popularCourse=[
{
    id: 1,
    title: "Complete Web Development Bootcamp",
    instructor: "Jhankar Mahbub",
    instructor_role: "Lead Instructor",
    instructor_img: "https://i.ibb.co.com/1J9CzY8Q/jhankar-vaia.jpg",
    duration: "20 Hours",
    rating: 5.0,
    level: "Beginner",
    category: "Development",
    description: "Learn full-stack web development from scratch with modern technologies like React, Node, and more. Master the tools that power the modern web.",
    image: "https://i.ibb.co.com/nHF3fpR/complete-web-bootcamp-ph.jpg",
    price: 149.00,
    old_price: 199.00,
    what_will_learn: [
      "Master HTML5 & CSS3 layout techniques like Flexbox and Grid.",
      "Build dynamic applications using JavaScript and modern React Hooks.",
      "Develop robust backend servers with Node.js and Express.",
      "Architect and manage relational and NoSQL databases effectively."
    ],
    curriculum: [
      { chapter: 1, title: "Introduction to the Web", lessons: 4, time: "45m" },
      { chapter: 2, title: "Frontend Fundamentals: CSS & JS", lessons: 12, time: "4h 20m" },
      { chapter: 3, title: "Advanced JavaScript & React", lessons: 18, time: "8h 15m" },
      { chapter: 4, title: "Full Stack Deployment", lessons: 6, time: "3h 40m" }
    ],
    features: [
      "20 hours on-demand video",
      "12 coding exercises",
      "24 downloadable resources",
      "Certificate of completion"
    ]
  },
  {
    id: 2,
    title: "Next Level Web Development",
    instructor: "Mezbaul Abedin Persian",
    instructor_role: "Lead Instructor (Next Level)",
    instructor_img: "https://i.ibb.co.com/RTR8g4RY/mezbaul-abedin-vaia-next-level.jpg",
    duration: "40 Hours",
    rating: 5.0,
    level: "Advanced",
    category: "Development",
    description: "Master industrial-level development with Next.js 15, TypeScript, and Modular Architecture. Designed for developers who want to reach the top 1% in the industry.",
    image: "https://i.ibb.co.com/prz0VLQz/Gemini-Generated-Image-21f28g21f28g21f2.png",
    price: 199.00,
    old_price: 299.00,
    what_will_learn: [
      "Professional-grade TypeScript for large-scale applications.",
      "Mastering Next.js 15 App Router, Server Actions, and Optimization.",
      "Industrial Modular Architecture and Clean Code principles.",
      "Advanced State Management with Redux Toolkit and RTK Query."
    ],
    curriculum: [
      { chapter: 1, title: "Mastering TypeScript", lessons: 12, time: "6h 40m" },
      { chapter: 2, title: "Advanced Next.js Architecture", lessons: 18, time: "10h 15m" },
      { chapter: 3, title: "Redux & State Management", lessons: 15, time: "8h 30m" },
      { chapter: 4, title: "Building a Full-Scale Industrial Project", lessons: 25, time: "15h 00m" }
    ],
    features: [
      "40 hours high-intensity training",
      "Real-world industrial projects",
      "Expert conceptual sessions",
      "Global standard certificate"
    ]
  },{
  id: 6,
  title: "Next.js 15 Deep Dive",
  instructor: "Ahashan Habib Utsho",
  instructor_role: "Full Stack Engineer",
  instructor_img: "https://i.ibb.co.com/QvY50qDb/utso-vaia-img.jpg",
  duration: "18 Hours",
  rating: 5.0,
  level: "Advanced",
  category: "Development",
  description: "Build high-performance web apps using Next.js App Router, Server Actions, and SSR.",
  image: "https://i.ibb.co.com/C3XXpVFZ/Gemini-Generated-Image-d82tbcd82tbcd82t.png",
  price: 129.00,
  old_price: 180.00,
  what_will_learn: [
    "Optimizing Core Web Vitals with Next.js.",
    "Implementing Authentication with NextAuth.js.",
    "Complex state management with Server Components.",
    "Integrating Stripe for global payments."
  ],
  curriculum: [
    { chapter: 1, title: "App Router Essentials", lessons: 7, time: "2h 50m" },
    { chapter: 2, title: "Data Fetching & Mutations", lessons: 11, time: "6h 15m" },
    { chapter: 3, title: "Performance Optimization", lessons: 9, time: "5h 40m" }
  ],
  features: [
    "18 hours on-demand video",
    "Full source code access",
    "Discord support access",
    "Certificate of completion"
  ]
}
  ]

 
  return (
    <section className="py-20 bg-[#FAF8FF]">
      
      <div className="text-center max-w-xl w-[90%] mx-auto space-y-4">
          <p className="text-xs font-bold uppercase text-(--primaryViolet) tracking-[2.4px]">MASTER A SKILL</p>
        <h4 className="text-4xl font-bold text-(--on-surface)">Popular Courses</h4>
        <p className="text-(--textVariant)">Curated selection of our most trending and highly-rated learning experiences
this month.</p>
      </div>
{/* popular courses card */}
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-8 max-w-7xl mx-auto w-[90%] mt-16">

{popularCourse.map((course)=><PopularCourseCard key={course.id} course={course}/>)}

</div>

    </section>
  );
};

export default PoupularCourses;