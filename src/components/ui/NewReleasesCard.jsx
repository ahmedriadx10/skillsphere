import Image from "next/image";
import Link from "next/link";

const NewReleasesCard = ({cardData}) => {
  const {image,id,title,  category,  instructor_img,  instructor}=cardData
  return (
    <div className="relative group  h-full "> {/* Another Overlap & height trick */}
             <div className="absolute inset-0 bg-black   transition-all duration-300"></div>
            <div className={`relative text-white p-5 flex flex-col justify-between h-full overflow-hidden`}>
                <div className="absolute inset-0 z-0 group-hover:scale-105 transition-transform duration-500 ">
                    <Image  fill src={image} alt={title} className="w-full h-full object-cover  opacity-60" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                </div>

                 {/* Content Top */}
                <div className="relative z-10 flex justify-end">
                  <span className={`bg-linear-[90deg,#6B38D4_0%,#BA0035_100%] text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider`}>
         {category}
                  </span>
                </div>

                 {/* Content Bottom */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-4 ">{title}</h3>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gray-500 overflow-hidden border border-(--outline)">
                             <img src={instructor_img} alt={instructor} />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-200">{instructor}</p>
                        </div>
                    </div>
                    <Link href={`/course-details/${id}`} className={`bg-purple-700 p-2 rounded-full shadow-lg`}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
                    </Link>
                  </div>
                </div>
            </div>
          </div>

  );
};

export default NewReleasesCard;







