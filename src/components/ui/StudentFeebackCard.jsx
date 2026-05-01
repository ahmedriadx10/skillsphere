// components/FeedbackCard.js
'use client'
import StarIcon from "@/utils/RatingManage";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import { SwiperSlide } from "swiper/react";

export default function StudentFeedBackCard({ impactData }) {

  const { rating, feedback='', image, role, name, id } = impactData;

  return (
<SwiperSlide>
      <div className="bg-white rounded-[20px] p-7 max-w-sm w-full  border border-(--outline)">
      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <div className="w-12 h-12 rounded-full bg-linear-to-br from-[#4a4a5e] to-[#2c2c3a] flex items-center justify-center overflow-hidden shrink-0">
          {image ? (
            <Image
              src={image}
              alt={name}
              className="w-full h-full object-cover"
              width={48}
              height={48}
            />
          ) : (
            <span className="text-white font-semibold text-sm">
              {name.charAt(0)}
            </span>
          )}
        </div>
        <div>
          <p className="font-semibold text-gray-900 text-[15px] leading-tight">
            {name}
          </p>
          <p className="text-[11px] font-semibold text-[#e0365a] uppercase tracking-wider mt-0.5">
            {role}
          </p>
        </div>
      </div>

      {/* Quote mark */}
      <p className="text-2xl font-bold text-[#c8c4f0] leading-none mb-2 font-serif">
       <FaQuoteLeft />
      </p>

      {/* Feedback text */}
      <p className="text-sm text-gray-500 italic leading-relaxed mb-5">
        "{feedback}"
      </p>

      {/* Star Rating */}
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon key={i} filled={i < rating} />
        ))}
      </div>
    </div>
</SwiperSlide>
  );
}
