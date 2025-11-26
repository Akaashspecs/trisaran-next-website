"use client";

import { useEffect, useState } from "react";

const DURATION = 800; // 2 seconds

// Custom hook to handle the counting animation
const useAnimatedNumber = (finalNumber) => {
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    // If the number is 0, just set it to the final number immediately
    if (finalNumber === 0) {
      setCurrentNumber(0);
      return;
    }

    const startTime = Date.now();
    let frameId;

    const animateCount = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(1, elapsed / DURATION);

      // Calculate the current value using the progress of the animation
      const nextNumber = Math.floor(progress * finalNumber);
      setCurrentNumber(nextNumber);

      if (progress < 1) {
        // Request the next frame for a smooth animation
        frameId = requestAnimationFrame(animateCount);
      }
      // When progress reaches 1, the number will be exactly finalNumber
    };

    // Start the animation loop
    frameId = requestAnimationFrame(animateCount);

    // Cleanup function to stop the animation when the component unmounts
    return () => cancelAnimationFrame(frameId);
  }, [finalNumber]); // Re-run effect if finalNumber changes

  return currentNumber;
};

// Component to display a single animated count item
const AnimatedCountItem = ({ text, num, total }) => {
  const animatedNum = useAnimatedNumber(num);

  // A helper function to format the number with commas (optional)
  const formatNumber = (number) => {
    return number.toLocaleString();
  };

  return (
    <div
      className={`flex flex-col justify-center items-center px-10 md:px-15 lg:px-20 ${
        Number(num) !== 1000 && " sm:border-l border-dashed border-white/20 "
      }`}
    >
      <h3 className="text-[#87e995] text-3xl font-medium">
        {formatNumber(animatedNum)}
        {total}+
      </h3>
      <p className="text-[#bcc1ce] text-[14px] text-center">{text}</p>
    </div>
  );
};

export default AnimatedCountItem;
