import { useCallback, useEffect, useState } from "react";

// Sample data for 10 images
const imageAssets = [
  "/Axis.png",
  "/aditya.png",
  "/icici.png",
  "/bob.png",
  "/kotak.png",
  "/bajaj.png",
  "/idfc.png",
  "/b.webp",
  "/l.png",
  "/h.webp",
];

// Configuration
const TOTAL_IMAGES = imageAssets.length;
const VISIBLE_COUNT = 8;
const IMAGE_WIDTH = 1200 / VISIBLE_COUNT; // 150px per image
const INTERVAL_TIME = 3000; // 3 seconds per transition

const LoopingCarousel = () => {
  // `currentIndex` tracks the index of the first image currently visible
  const [currentIndex, setCurrentIndex] = useState(0);

  // --- Animation Logic ---
  const goToNext = useCallback(() => {
    // Increment the index, but wrap around to 0 when it reaches the end
    setCurrentIndex((prevIndex) => (prevIndex + 1) % TOTAL_IMAGES);
  }, []);

  useEffect(() => {
    // Set up the automatic transition timer
    const interval = setInterval(goToNext, INTERVAL_TIME);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [goToNext]);

  // --- Rendering Logic ---

  // 1. Create a "Doubled" Array for seamless looping
  // We duplicate the original array to ensure that as the last images slide out,
  // the first images are already lined up to slide in without a noticeable jump.
  const doubledImages = [...imageAssets, ...imageAssets];

  // The style object to control the sliding transformation
  const carouselStyle = {
    // Calculate the translateX value. We move by the width of one image (150px).
    // The `currentIndex` determines how many images' worth we have moved.
    transform: `translateX(-${currentIndex * IMAGE_WIDTH}px)`,
    // Add the CSS transition for a smooth slide
    transition: "transform 0.5s ease-in-out",
    // Ensure the container is wide enough for all images (20 images * 150px = 3000px)
    width: `${doubledImages.length * IMAGE_WIDTH}px`,
  };

  return (
    <div style={carouselStyle} className="flex bg-white ">
      {doubledImages.map((src, index) => (
        <div
          key={index}
          className="w-[150px] object-cover flex justify-center"
          // style={{ ...styles.imageItem, width: `${IMAGE_WIDTH}px` }}
        >
          {/* Replace this with an actual <img> tag */}
          {/* <div style={styles.imagePlaceholder}>{src}</div> */}
          <img src={src} className="h-[90px] w-[120px] object-contain" />
        </div>
      ))}
    </div>
  );
};

export default LoopingCarousel;
