const Trust = () => {
  const data = [
    {
      heading: "Trusted Banking Partnerships",
      desc: "Collaborate with leading banks to build credibility and expand your business reach.",
      img: "/bank.png",
      color: "bg-cyan-50",
    },
    {
      heading: "High Payouts for Our Partners",
      desc: "Enjoy higher returns with clear, transparent payout structures and reliable support.",
      img: "/payout.png",
      color: "bg-blue-50",
    },
    {
      heading: "Dedicated Guidance & Support",
      desc: "We understand your unique goals and guide you toward sustainable success.",
      img: "/guide.png",
      color: "bg-green-50",
    },
  ];

  return (
    <div className="max-w-[1800px] mx-auto pb-[80px] mt-10 px-5">
      {" "}
      <div className="text-[25px] md:text-[35px] font-medium text-center  ">
        Why is Trisaran the <span className="text-[#4eb543]">#1</span> trusted
        <br /> financial brand across India
      </div>
      <div className="h-[6px] w-[80px] bg-[#4eb543] mx-auto mt-6 mb-14"></div>
      <div className="flex flex-col md:flex-row  justify-center gap-5 lg:gap-13 w-full ">
        {data.map((item, i) => (
          <div
            key={i}
            className={`flex flex-col items-center shadow-sm py-5 rounded-xl ${item.color} px-3 grow`}
          >
            <img src={item.img} className="h-[100px] mb-5" />
            <div className="text-[20px] text-[#4d5870] font-medium text-center">
              {item.heading}
            </div>
            <div className="text-[#4a4a4a] max-w-[290px] text-center md:mt-3">
              {item.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trust;
