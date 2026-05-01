import CutstomNavlink from "./CutstomNavlink";

const Navlinks = () => {
 
  return (
    <>
<li><CutstomNavlink href={'/'}>Home</CutstomNavlink> </li>
<li><CutstomNavlink href={'/all-course'}>All Course</CutstomNavlink> </li>
<li><CutstomNavlink href={'/my-profile'}>My Profile</CutstomNavlink></li>
    </>
  );
};

export default Navlinks;