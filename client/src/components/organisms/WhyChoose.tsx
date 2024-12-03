import icon1 from "../../assets/icons/whyChoose/icon1.svg";
import icon2 from "../../assets/icons/whyChoose/icon2.svg";
import icon3 from "../../assets/icons/whyChoose/icon3.svg";

import WhyChooseCard from "../molecules/WhyChooseCard";

const whyChooseCardContent = [
  {
    icon: {
      path: icon1,
      alt: "icon 1",
    },
    label: "Fast and Reliable Service",
    description: "Our efficient delivery ensures you never run out of water.",
    classname: "border-[#4147D5] shadow-[#7f80cdab]",
  },
  {
    icon: {
      path: icon2,
      alt: "icon 2",
    },
    label: "Customer Loyalty",
    description:
      "Many of our customers have trusted us for over 15 to 20 years—a testament to the quality of our products and services.",
    classname: "border-[#008EFF] shadow-[#7bc0f8b5]",
  },
  {
    icon: {
      path: icon3,
      alt: "icon 3",
    },
    label: "Leading in the UAE",
    description:
      "We are proud to be among the top water providers in the region, recognized for our consistent excellence and customer satisfaction.",
    classname: "border-[#14B082] shadow-[#6ec9ae74]",
  },
];

const WhyChoose = () => {
  return (
    <div className="mx-auto mt-8 max-w-screen-lg px-5 pb-[30px]">
      <h2 className="relative z-20 text-center text-[34px] font-semibold md:text-4xl">
        Why Choose Us
        <span className="relative -top-5 -z-20 mx-auto block h-1.5 w-[242px] rounded-md bg-[#22E27F] opacity-50 md:-top-2.5 md:w-[250px]"></span>
      </h2>

      <p className="mx-auto mt-4 max-w-[740px] leading-[160%] text-[#494949] md:text-center">
        At Sana Water, we believe in providing more than just water—we deliver
        purity, safety, and trust. Join thousands of satisfied customers who
        rely on us daily for their hydration needs.
      </p>
      <div className="mx-auto mt-6 grid space-y-8 md:max-w-[740px] md:grid-cols-2 md:gap-8 md:space-y-0 lg:max-w-[1200px] lg:grid-cols-3">
        {whyChooseCardContent.map((data, index) => (
          <WhyChooseCard key={index} {...data} />
        ))}
      </div>
    </div>
  );
};

export default WhyChoose;
