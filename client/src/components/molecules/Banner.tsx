import { useEffect, useState } from "react";
import Navbar from "../organisms/Navbar";

const images = [
  "/banners/banner-1.svg",
  "/banners/banner-1.svg",
  "/banners/banner-1.svg",
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        return (prevIndex + 1) % images.length;
      });
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <Navbar />
      <div
        className={`flex transition-transform duration-700 ease-in-out`}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img src={image} key={index} alt={`Banner ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default Banner;
