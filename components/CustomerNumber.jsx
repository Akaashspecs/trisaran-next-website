import AnimatedCountItem from "./AnimatedCountItem";

const CustomerNumber = () => {
  const data = [
    { text: "Loan Disbursement", num: "1000", total: "Cr" },
    { text: "DSA partners", num: "100", total: "" },
    { text: "Bank Partnerships", num: "80", total: "" },
  ];

  return (
    <div className="bg-[#37445a] py-[50px] flex flex-col items-center justify-between px-5">
      <div className="text-[20px] sm:text-[24px]  text-white text-center">
        Millions of WIshes, Enabled!
      </div>
      <div className="text-white text-sm sm:text-base  text-center">
        We archieve such numbers, because you are more than a number to use.
      </div>
      <div className="flex flex-col sm:flex-row  h-full sm:h-[150px] gap-5 sm:gap-0 mt-[40px] pb-8 sm:pb-3">
        {data.map((item, i) => (
          <AnimatedCountItem
            key={i}
            text={item.text}
            num={item.num}
            total={item.total}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomerNumber;
