"use client";

import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonials = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const testimonials = [
    {
      name: "Yash",
      date: "22 Aug 2022",
      message:
        "I had taken my personal loan from Tata Capital and executive Nitu Chauhan supported her best throughout the process. The approval was quick and with a good rate of interest.",
    },
    {
      name: "Goutham N",
      date: "22 Feb 2022",
      message:
        "I got a call from Sapna Motwani who explained the Standard Chartered Credit Card so well. My card got approved in no time. Excellent support throughout!",
    },
    {
      name: "Sabdar Ali Shaikh",
      date: "22 Feb 2022",
      message:
        "Excellent service — thank you Monica and Mukesh for helping me complete the loan process smoothly and professionally. I really appreciate your hard work.",
    },
    {
      name: "Kiran Kumar",
      date: "16 Oct 2021",
      message:
        "Would like to appreciate Mr. Manjeet Dahiya for taking accountability and staying connected through every query. Great job and excellent service!",
    },
    {
      name: "Bhanu Naidu",
      date: "11 Dec 2019",
      message:
        "I applied for a personal loan on Trisaran. Manish Sharma was knowledgeable and efficient — great follow-ups and excellent communication. Highly recommended!",
    },
  ];
  return (
    <section className="bg-gray-50 py-12" id="testimonials">
      <div className="max-w-[1600px] mx-auto px-4 relative">
        <h3 className="text-2xl sm:text-3xl font-bold text-center mb-16 md:mb-8">
          Trisaran&apos;s Success Stories
        </h3>
        <div className="flex top-12 right-0  w-full md:w-fit justify-center  md:top-0 md:right-5 absolute   px-2 gap-10">
          <button
            ref={prevRef}
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full h-[35px] w-[35px]  transition"
          >
            ‹
          </button>
          <button
            ref={nextRef}
            className="bg-green-500 hover:bg-green-600 text-white rounded-full h-[35px] w-[35px] transition"
          >
            ›
          </button>
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop={true}
          className="pb-10 flex"
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
        >
          <div className="flex ">
            {testimonials.map((t, i) => (
              <SwiperSlide key={i} className="mb-3 w-full flex justify-center ">
                <div className="bg-white rounded-xl  shadow-md hover:shadow-lg transition p-6 h-full flex flex-col justify-between">
                  <p className="text-gray-700 italic mb-4 md:min-h-[92px] lg:min-h-[142px] 2xl:min-h-[92px]">
                    “{t.message}”
                  </p>
                  <div className="border-t pt-3 mt-auto">
                    <p className="font-semibold text-[#4eb543]">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.date}</p>
                    <div className="flex mt-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400">
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
