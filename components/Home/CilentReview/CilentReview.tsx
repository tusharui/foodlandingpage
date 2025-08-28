"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    image: "/images/c1.png",
    name: "John Doe",
    review: "Amazing food and quick delivery! Loved it.",
    rating: 5,
  },
  {
    id: 2,
    image: "/images/c2.png",
    name: "Sophia Smith",
    review: "Great taste and quality, will order again.",
    rating: 4,
  },
  {
    id: 3,
    image: "/images/c3.png",
    name: "Michael Johnson",
    review: "Affordable and delicious meals every time.",
    rating: 5,
  },
];

const ClientReview = () => {
  return (
    <div className="w-[90%] mx-auto py-12">
      <h2 className="text-center text-2xl font-bold mb-10">
        What Our Clients Say
      </h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {reviews.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="bg-white p-6 rounded-2xl shadow-md text-center transition-transform duration-300 hover:scale-105 animate-fadeIn">
              <Image
                src={item.image}
                alt={item.name}
                width={80}
                height={80}
                className="rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-gray-600 text-sm mt-2">{item.review}</p>

              {/* stars */}
              <div className="flex justify-center mt-3 gap-1">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <FaStar
                    key={i}
                    className="text-yellow-400 animate-starPop"
                  />
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* CSS animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-in-out;
        }

        @keyframes starPop {
          0% {
            transform: scale(0.8);
            opacity: 0;
          }
          50% {
            transform: scale(1.2);
            opacity: 1;
          }
          100% {
            transform: scale(1);
          }
        }

        .animate-starPop {
          animation: starPop 0.6s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default ClientReview;
