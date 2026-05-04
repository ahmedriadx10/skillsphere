export const courseDataGet = async () => {
  const res = await fetch("https://skillsphere-edu.vercel.app/course.json");

  const courseData = await res.json();

  return courseData;
};
