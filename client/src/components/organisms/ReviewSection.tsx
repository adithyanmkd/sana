import ElementOne from "../../assets/small-elements/review-ele-1.svg";
import ElementTwo from "../../assets/small-elements/review-ele-2.svg";
import Comma from "../../assets/small-elements/comma.svg";

import { useState, useEffect } from "react";

//reviews
const reviews = [
  {
    review:
      "Sana Water has been our go-to water supplier for over a decade. Their service is incredibly reliable, and the water quality is consistently top-notch. We wouldn't choose anyone else!",
    reviewer: "Ayesha R., Dubai",
  },
  {
    review:
      "The 5-gallon bottles are always delivered on time, and the water tastes fresh and pure. We've been loyal customers for 15 years, and Sana Water has never let us down.",
    reviewer: "Mohammed F., Dubai",
  },
  {
    review:
      "Sana Water has exceeded my expectations with their fast and reliable delivery. The 200ml cup water is perfect for our events, and everyone loves the quality!",
    reviewer: "Ryan P., Sharjah",
  },
  {
    review:
      "Their team is always professional and friendly. Sana Water feels like a brand you can trust, and their long-standing reputation speaks for itself.",
    reviewer: "Neha M., Al Ain",
  },
];

const ReviewSection = () => {
  const [currenctReviewIndex, setCurrentReviewIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isPaused, reviews.length]);

  return (
    <div className="mx-auto mt-8 max-w-screen-lg px-5 pb-[30px]">
      <h2 className="text-center text-[34px] font-medium capitalize leading-[120%]">
        <span className="relative mr-2">
          <img
            className="absolute -left-[18px] top-[3px] -z-10 w-[100px]"
            src={ElementOne}
            alt="element"
          />
          what
        </span>
        our customer says
        <span className="ml-2">
          <div className="relative inline-block">
            about Us
            <img
              className="absolute top-[2rem] -z-10 w-[186px]"
              src={ElementTwo}
              alt="element"
            />
          </div>
        </span>
      </h2>
      <div
        className="relative mx-auto mt-8 max-w-screen-sm rounded-[60px] bg-[#D7EBEE] bg-opacity-30"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <img className="absolute left-4 top-6 w-10" src={Comma} alt="comma" />
        <p className="px-8 py-16 text-[#494949]">
          {reviews[currenctReviewIndex].review}
          <span className="block text-right italic text-black">
            —{reviews[currenctReviewIndex].reviewer}
          </span>
        </p>
        <img
          className="absolute bottom-6 right-4 w-10 scale-x-[-1] scale-y-[-1]"
          src={Comma}
          alt="comma"
        />
      </div>
    </div>
  );
};

export default ReviewSection;
