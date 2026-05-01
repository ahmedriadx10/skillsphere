
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn, 
  FaEnvelope, 
  FaPhoneAlt, 
  FaMapMarkerAlt,
  FaAward,
  FaCookieBite,
  FaCloud
} from 'react-icons/fa';

const Footer = () => {

  const gradientTextStyle = {
    background: 'linear-gradient(90deg, #6B38D4 0%, #BA0035 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  const gradientBgStyle = {
    background: 'linear-gradient(90deg, #6B38D4 0%, #BA0035 100%)',
  };

  return (
    <footer className="bg-[##faf7ff] py-12 px-6 md:px-16 font-sans text-gray-600 ">
      <div className="max-w-7xl mx-auto">
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
   
          <div className="space-y-4">
            <h2 style={gradientTextStyle} className="text-2xl font-bold">
              SkillSphere
            </h2>
            <p className="text-sm leading-relaxed max-w-xs">
              Empowering lifelong learners through high-definition educational experiences and professional-grade mentorship.
            </p>
            <div className="flex space-x-3 pt-2">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, index) => (
                <div 
                  key={index} 
                  style={gradientBgStyle} 
                  className="p-2.5 rounded-full text-white cursor-pointer hover:scale-110 transition-transform"
                >
                  <Icon size={14} />
                </div>
              ))}
            </div>
          </div>

   
          <div>
            <h3 className="text-black font-bold mb-5">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-purple-600 cursor-pointer transition-colors">About Us</li>
              <li className="hover:text-purple-600 cursor-pointer transition-colors">Courses</li>
              <li className="hover:text-purple-600 cursor-pointer transition-colors">Help Center</li>
              <li className="hover:text-purple-600 cursor-pointer transition-colors">Mentors</li>
            </ul>
          </div>

          <div>
            <h3 className="text-black font-bold mb-5">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li style={gradientTextStyle} className="font-semibold cursor-pointer">Terms & Conditions</li>
              <li style={gradientTextStyle} className="font-semibold cursor-pointer">Privacy Policy</li>
              <li className="hover:text-purple-600 cursor-pointer transition-colors">Cookie Policy</li>
              <li className="hover:text-purple-600 cursor-pointer transition-colors">Compliance</li>
            </ul>
          </div>


          <div>
            <h3 className="text-black font-bold mb-5">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center space-x-3 group cursor-pointer">
                <FaEnvelope className="text-[#6B38D4] group-hover:scale-110 transition-transform" />
                <span>hello@skillsphere.edu</span>
              </li>
              <li className="flex items-center space-x-3 group cursor-pointer">
                <FaPhoneAlt className="text-[#6B38D4] group-hover:scale-110 transition-transform" />
                <span>+1 (888) SKILL-EDU</span>
              </li>
              <li className="flex items-start space-x-3 group cursor-pointer">
                <FaMapMarkerAlt className="mt-1 text-[#6B38D4] group-hover:scale-110 transition-transform" />
                <span className="leading-tight">123 Innovation Way, EdTech Valley, San Francisco, CA 94105</span>
              </li>
            </ul>
          </div>
        </div>


        <div className="border-t border-gray-200 pt-8 gap-2.5 lg:gap-0 flex flex-col lg:flex-row justify-between items-center text-sm">
          <p className="mb-4 md:mb-0">
            © {new Date().getFullYear()} SkillSphere. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-8 items-center">
            <div className="flex items-center space-x-2 cursor-pointer hover:text-black transition-colors group">
              <FaAward className="text-gray-400 group-hover:text-[#6B38D4]" />
              <span>Scholarship Program</span>
            </div>
            
            <div className="flex items-center space-x-2 cursor-pointer hover:text-black transition-colors group">
              <FaCookieBite className="text-gray-400 group-hover:text-[#6B38D4]" />
              <span>Cookie Policy</span>
            </div>
            
            <div className="flex items-center space-x-2 cursor-pointer hover:text-black transition-colors group">
              <FaCloud className="text-gray-400 group-hover:text-[#6B38D4]" />
              <span>API Status</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;