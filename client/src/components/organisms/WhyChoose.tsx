import WhyChooseCard from "../molecules/WhyChooseCard";

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
      <div>
        <WhyChooseCard />
      </div>
    </div>
  );
};

export default WhyChoose;
