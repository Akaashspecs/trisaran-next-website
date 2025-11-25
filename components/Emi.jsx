"use client";

import { useMemo, useState } from "react";
import LoopingCarousel from "./ImageCoousal";

const Emi = () => {
  const [loan, setLoan] = useState("personal");
  const [loanDetail, setLoanDetail] = useState({
    personal: { loan: 40000, interest: 1, months: 1 },
    home: { loan: 300000, interest: 1, months: 1 },
  });

  const emi = useMemo(() => {
    let { loan: amount, interest, months } = loanDetail[loan];

    amount = Number(amount);
    interest = Number(interest);
    months = Number(months);

    if (!amount || !interest || !months) return 0; // safeguard

    const r = interest / 12 / 100; // monthly interest rate

    return (
      (amount * r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1)
    );
  }, [loan, loanDetail]);

  //   const emi = useMemo(() => {
  //     const { loan: amount, interest, months } = loanDetail[loan];
  //     const r = interest / 12 / 100;
  //     if (r === 0) return amount / months;
  //     return (
  //       (amount * r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1)
  //     );
  //   }, [loan, loanDetail]);

  const getSliderBackground = (value, min, max) => {
    const percent = ((value - min) / (max - min)) * 100;
    return `linear-gradient(to right, #4eb543 ${percent}%, #dcf0d9 ${percent}%)`;
  };

  // Handle slider changes
  const handleChange = (field, value) => {
    setLoanDetail((prev) => ({
      ...prev,
      [loan]: { ...prev[loan], [field]: Number(value) },
    }));
  };

  const formatINR = (num) => {
    return new Intl.NumberFormat("en-IN", {
      maximumFractionDigits: 0,
    }).format(num);
  };

  return (
    <div className="w-full relative flex flex-col items-center px-5">
      <div className="sm:max-w-[1200px] w-[300px] sm:w-[600px] lg:w-[900px] xl:w-full  flex overflow-hidden border border-gray-300 rounded-xl mx-auto relative z-10 bottom-10 bg-white shadow-xl">
        <LoopingCarousel />
      </div>

      <div className="max-w-[1000px] flex flex-col-reverse items-center lg:flex-row lg:mt-[75px] mb-[60px]">
        <div className="lg:w-[50%] w-full relative flex justify-center lg:justify-start">
          <div className="bg-white shadow-xl absolute z-30  -bottom-7 lg:bottom-0 lg:right-0 lg:top-[30%] flex flex-col items-center p-5 h-fit w-[165px] ">
            <h5 className="text-[14px] leading-6 text-[#27364b] font-medium">
              Monthly EMI
            </h5>
            <div className="text-[#4eb543] text-[25px] font-medium">
              ₹{formatINR(Math.floor(emi))}
            </div>
          </div>
          <div className="w-full max-w-[360px] lg:w-[360px] h-[360px] shadow-2xl py-6 pl-6 pr-[50px] mt-5 lg:mt-0">
            <h4 className="font-medium text-[13px] leading-[23px]">
              EMI Calculator for
            </h4>
            <div className="leading-4 mb-5 text-[#27364b] text-[20px] font-extrabold">
              LOAN
            </div>
            <div className="flex flex-col gap-5">
              <div>
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Loan Amount</span>
                  <span>₹{formatINR(loanDetail[loan].loan)}</span>
                </div>
                <input
                  type="range"
                  min={loan === "personal" ? 10000 : 100000}
                  max={loan === "personal" ? 2000000 : 10000000}
                  value={loanDetail[loan].loan}
                  onChange={(e) => handleChange("loan", e.target.value)}
                  className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-gray-200 accent-[#4eb543]
                    [&::-webkit-slider-thumb]:appearance-none
                    [&::-webkit-slider-thumb]:w-5
                    [&::-webkit-slider-thumb]:h-5
                    [&::-webkit-slider-thumb]:rounded-full
                     [&::-webkit-slider-thumb]:bg-white 
                    [&::-webkit-slider-thumb]:border-5 
                     [&::-webkit-slider-thumb]:border-[#4eb543] 
                    [&::-webkit-slider-thumb]:shadow-2xl "
                  style={{
                    background: `linear-gradient(to right, #4eb543 ${
                      ((loanDetail[loan].loan -
                        (loan === "personal" ? 10000 : 100000)) /
                        ((loan === "personal" ? 2000000 : 10000000) -
                          (loan === "personal" ? 10000 : 100000))) *
                      100
                    }%, #dcf0d9 ${
                      ((loanDetail[loan].loan -
                        (loan === "personal" ? 10000 : 100000)) /
                        ((loan === "personal" ? 2000000 : 10000000) -
                          (loan === "personal" ? 10000 : 100000))) *
                      100
                    }%)`,
                  }}
                />
              </div>

              {/* Interest Rate */}
              <div>
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Interest Rate (%)</span>
                  <span>{loanDetail[loan].interest}%</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="15"
                  step="0.1"
                  value={loanDetail[loan].interest}
                  onChange={(e) => handleChange("interest", e.target.value)}
                  className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-gray-200 accent-[#4eb543]
                    [&::-webkit-slider-thumb]:appearance-none
                   [&::-webkit-slider-thumb]:w-5
                    [&::-webkit-slider-thumb]:h-5
                    [&::-webkit-slider-thumb]:rounded-full
                     [&::-webkit-slider-thumb]:bg-white 
                    [&::-webkit-slider-thumb]:border-5 
                     [&::-webkit-slider-thumb]:border-[#4eb543] 
                    [&::-webkit-slider-thumb]:shadow-2xl "
                  style={{
                    background: getSliderBackground(
                      loanDetail[loan].interest,
                      1,
                      15
                    ),
                  }}
                />
              </div>

              {/* Tenure */}
              <div>
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Tenure (months)</span>
                  <span>{loanDetail[loan].months}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max={loan === "personal" ? 60 : 360}
                  value={loanDetail[loan].months}
                  onChange={(e) => handleChange("months", e.target.value)}
                  className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-gray-200 accent-[#4eb543]
                    [&::-webkit-slider-thumb]:appearance-none
                    [&::-webkit-slider-thumb]:w-5
                    [&::-webkit-slider-thumb]:h-5
                    [&::-webkit-slider-thumb]:rounded-full
                     [&::-webkit-slider-thumb]:bg-white 
                    [&::-webkit-slider-thumb]:border-5 
                     [&::-webkit-slider-thumb]:border-[#4eb543] 
                    [&::-webkit-slider-thumb]:shadow-2xl "
                  style={{
                    background: getSliderBackground(
                      loanDetail[loan].months,
                      1,
                      loan === "personal" ? 60 : 360
                    ),
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[600px] lg:w-[50%] pl-5">
          <div className="text-[#27364b] text-2xl font-semibold">
            EMI Calculator
          </div>
          <div className="text-sm leading-6 mb-5 text-[#64748b] font-normal">
            Measure twice, cut once. You may have a target amount, a target
            tenure or a target EMI. When it comes to loans, no matter how big or
            small, always get an idea how it will affect your monthly finances,
            before you take a decision.
          </div>
          <div>
            <div
              className={`lg:ml-3 border-l-4 px-[30px] py-[15px] cursor-pointer transition-colors duration-450 ${
                loan === "personal" ? "border-[#4eb543]" : "border-gray-200"
              }`}
              onClick={() => setLoan("personal")}
            >
              <div className="text-[16px] leading-[26px] font-medium text-[#27364b]">
                Loan EMI Calculator
              </div>
              <div className="text-[12px] leading-[22px] font-medium text-[#64748b]">
                Calculate how much it will take to enable short-term <br />
                liquidity.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Emi;
