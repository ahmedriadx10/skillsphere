import Image from 'next/image';
import React from 'react';

const InstructorCard = ({instructor}) => {
  const {id,name,role,image,bio,badges, is_master_instructor}=instructor
  return (
<div className={`max-w-md md:max-w-82 bg-white rounded-4xl shadow overflow-hidden  lg:${is_master_instructor?'relative lg:top-5':''}`}>
      {/* Image Section */}
      <div className="relative h-70 w-full  overflow-hidden">
        <Image
          src={image}
          alt={name}
          layout="fill"
        
          className="object-cover  transition-transform duration-300 hover:scale-105"   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"  
        />
        {/* Optional Badge (e.g., Master Instructor) */}
        {is_master_instructor && (
          <div className="absolute top-4 right-4 bg-linear-to-r from-purple-600 to-pink-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
            Master Instructor
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-5 mt-6">
        <p className="text-pink-600 text-[10px] font-bold uppercase tracking-[0.15em] mb-2">
          {role}
        </p>
        <h3 className="text-gray-800 text-2xl font-semibold mb-3">
          {name}
        </h3>
        <p className="text-gray-500 text-xs leading-relaxed mb-6">
          {bio}
        </p>

        {/* Tags Section */}
        <div className="flex flex-wrap gap-2">
          {badges.map((tag, index) => (
            <span
              key={index}
              className="bg-purple-50 text-purple-600 text-[10px] font-bold px-3 py-1 rounded-md uppercase"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;