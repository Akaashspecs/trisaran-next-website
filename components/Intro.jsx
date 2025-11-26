"use client";

import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const Intro = () => {
  const slides = [
    {
      smallHeading: "Choose a",
      headingPart1: "Personal",
      headingPart2: " Loan",
      description1: "with ",
      description2: "Lowest and instant Approval",
      description3: "Fulfill your needs without any heavy documentation.",
      description4: "Perfect for medical emergencies, travel, or shopping.",
      img: "personal-loan-bg.png",
    },
    {
      smallHeading: "Choose a",
      headingPart1: "Instant",
      headingPart2: " Loan",
      description1: "with",
      description2: "Quick Disbursal and Minimal Documents",
      description3: "Money deposited instantly into your bank account.",
      description4: "Ideal for emergency needs and short-term requirements.",
      img: "instant-loan-bg.png",
    },
    {
      smallHeading: "Choose a",
      headingPart1: "Home",
      headingPart2: " Loan",
      description1: "with",
      description2: "Low Interest Rates and Easy EMIs",
      description3: "Buy your dream home with easy monthly payments.",
      description4: "Special offers for first-time home buyers.",
      img: "home-loan-bg.png",
    },
    // {
    //   smallHeading: "Choowse a",
    //   headingPart1: "Cred",
    //   headingPart2: " Loawn",
    //   descrtiontion1: "wiwth ",
    //   descrtiontion2: "Lowest and instant Approval",
    //   img: "Personal Loan.jpg",
    // },
  ];

  return (
    <div className="relative   md:py-0 py-10">
      <div className="bg-[linear-gradient(0.59deg,#edfcff_50.93%,rgba(243,253,255,0)_100%)] bottom-0 w-full  z-10 flex    h-full">
        <img
          src="/top-banner-background.png"
          className=" h-[320px] absolute bottom-0 object-cover right-0"
        />
        {/* <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          effect="slide"
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            el: ".custom-pagination", // 👈 Custom container
          }}
          className="h-full"
        >
          {slides.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="flex flex-col px-5 sm:gap-5 lg:gap-24 sm:flex-row justify-center md:justify-between items-center  max-w-[1200px] mx-auto  h-full">
                <div className="text-center">
                  <p className="text-gray-700 font-bold text-[29px] ">
                    {item.smallHeading}
                  </p>
                  <h1 className="xl:text-7xl text-4xl sm:text-[52px] font-semibold mb-3">
                    <span className="text-[#4eb543]">{item.headingPart1}</span>
                    {item.headingPart2}
                  </h1>

                  <p className="text-lg text-gray-700">
                    {item.description1}{" "}
                    <span className="font-semibold ">{item.description2}</span>
                  </p>
                  <p className="text-lg text-gray-700">
                    {item.description3}{" "}
                    <span className="font-semibold ">{item.description4}</span>
                  </p>
                </div>
                {item.img && (
                  <img
                    src={item.img}
                    alt="loan visual"
                    className=" mt-6 h-[250px] sm:h-[300px] md:h-[400px] object-contain"
                  />
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper> */}

        <div className="flex w-full justify-around md:flex-row flex-col  md:mt-10 md:pl-15">
          <div className="relative w-full  max-w-[950px]   flex flex-col  items-center md:items-start mb-10 md:mb-0 px-5 md:px-0">
            <div className="text-[30px] lg:text-[45px] lg:leading-13 max-w-[940px] mt-3 md:mt-10 text-center md:text-start ">
              Best Platform to sell{" "}
              <h1 className=" inline text-green-500/70 font-semibold">
                {" "}
                Financial Services
              </h1>{" "}
              online
            </div>
            <div className="mt-5  lg:text-[20px] text-gray-800 max-w-[600px] text-center md:text-start">
              Learn & Earn From Anywhere By Referring Customers And Educating
              Them On The Products Being Offered.
            </div>
            <div className="bg-blue-500 w-fit px-3 py-3 text-white rounded-2xl mt-5 block lg:hidden">
              Download Now
            </div>
            <Link
              href={"/partner"}
              className="bg-blue-500 w-fit px-3 py-3 text-white rounded-2xl mt-5 hidden lg:block"
            >
              Register Now
            </Link>
          </div>
          <div className="relative md:mb-10  lg:block flex justify-center">
            <Image
              width={512}
              height={521}
              alt="app"
              className=""
              src={"/mobile-app.png"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
