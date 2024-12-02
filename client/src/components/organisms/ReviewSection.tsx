import ElementOne from "../../assets/small-elements/review-ele-1.svg";
import ElementTwo from "../../assets/small-elements/review-ele-2.svg";
import Comma from "../../assets/small-elements/comma.svg";

const ReviewSection = () => {
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
      <div className="relative mx-auto mt-8 max-w-screen-sm rounded-[60px] bg-[#D7EBEE] bg-opacity-30">
        <img className="absolute left-4 top-6 w-10" src={Comma} alt="comma" />
        <p className="px-8 py-16 text-[#494949]">
          Sana Water has been our go-to water supplier for over a decade. Their
          service is incredibly reliable, and the water quality is consistently
          top-notch. We wouldn't choose anyone else!
          <span className="block text-right italic text-black">
            — Ayesha R., Dubai
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
