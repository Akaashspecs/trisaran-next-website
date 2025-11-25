import Image from "next/image";
import Link from "next/link";

const Features = () => {
  const data = [
    { img: "/credit-card.png", text: "Credit Card", color: "bg-cyan-200" },
    { img: "/instant-loan.png", text: "Instant Loan", color: "bg-sky-200" },
    {
      img: "/personal-loan.png",
      text: "Personal Loan",
      color: "bg-yellow-200",
    },
    { img: "/business-loan.png", text: "Business Loan", color: "bg-red-200" },
    { img: "/home-loan.png", text: "Home Loan", color: "bg-green-200" },
    {
      img: "/loan-against.png",
      text: "Loan Against Property",
      color: "bg-orange-200",
    },
    {
      img: "/education-loan.png",
      text: "Education Loan",
      color: "bg-cyan-200",
    },
    { img: "/new-car-loan.png", text: "New Car Loan", color: "bg-sky-200" },
    {
      img: "/used-car-loan.png",
      text: "Used Car Loan",
      color: "bg-yellow-200",
    },
    { img: "/saving-account.png", text: "Saving Account", color: "bg-red-200" },
    { img: "/demat-account.png", text: "Demat Account", color: "bg-green-200" },
    { img: "/insurance.png", text: "Insurance", color: "bg-orange-200" },
  ];

  return (
    <div>
      <div className="w-full bg-[#37445a] h-[96px]  text-center  justify-center items-center text-white text-sm sm:text-base md:text-xl lg:text-2xl gap-2 md:gap-5 flex flex-col md:flex-row  px-10">
        Are you looking to become a Trisaran Money Partner?
        <Link
          href={"partner"}
          className="px-6 bg-green-600 rounded-full py-1 md:py-2 text-base hover:scale-110 shadow-2xl transform duration-150"
        >
          Click Here
        </Link>
      </div>
      <div className="py-[40px] md:py-[80px] px-5">
        <div className="w-full  text-center gap-1 mb-[30px]">
          Bringing you the <span className="font-semibold"> Best Products</span>{" "}
          from{" "}
          <span className="font-semibold">
            Top Banks and financial Institutions
          </span>
        </div>
        <div className="flex max-w-[1000px] mx-auto flex-row flex-wrap items-center justify-center gap-5 ">
          {data.map((item) => (
            <div
              key={item.text}
              className="h-[120px] sm:h-[150px] w-[150px] shadow-md flex flex-col justify-center items-center rounded-md"
            >
              <div
                className={`${item.color} h-[60px] w-[60px] rounded-md p-1 `}
              >
                <Image
                  height={52}
                  width={52}
                  src={item.img}
                  alt="Description"
                />
              </div>
              <div className="uppercase text-sm mt-3 text-center">
                {item.text}
              </div>
            </div>
          ))}
        </div>
        <div className="block lg:hidden mt-4 w-full text-center mt-10">
          Download Our <span className="font-semibold">App:</span>
        </div>
      </div>
    </div>
  );
};

export default Features;
