import { useEffect, useState } from "react";
import Navbar from "../organisms/Navbar";

const images = [
  "banners/banner-1.svg",
  "banners/banner-1.svg",
  "banners/banner-1.svg",
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        return (prevIndex + 1) % images.length;
      });
    }, 3000);

    return () => clearInterval(intervalId);
  }, [isPaused]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative overflow-hidden">
      <Navbar />
      <div
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className={`flex transition-transform duration-700 ease-in-out`}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img src={image} key={index} alt={`Banner ${index + 1}`} />
        ))}
      </div>
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 transform space-x-4">
        {images.map((_, index) => (
          <button
            key={index}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onClick={() => goToSlide(index)}
            className={`size-3 rounded-full ${index === currentIndex ? "bg-white" : "bg-gray-400"}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Banner;
