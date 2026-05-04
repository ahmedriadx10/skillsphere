import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

const PublicLayout = ({children}) => {
  return (
    <>
  <Navbar/>
  {children}
  <Footer/>    
    </>
  );
};

export default PublicLayout;