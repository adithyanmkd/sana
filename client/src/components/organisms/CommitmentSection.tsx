import DivBg from "../../assets/images/sm-screen-bg.svg";

import CommitmentCard from "../molecules/CommitmentCard";

const CommitmentSection = () => {
  return (
    <div className="relative mt-4">
      <div className="px-5">
        <h2 className="mb-5 text-2xl font-medium">
          Our Commitment to Quality
          <span>
            <div className="mt-[6px] h-[2px] w-[200px] bg-black"></div>
          </span>
        </h2>
        <p className="max-w-screen-md text-justify leading-[160%] text-[#494949]">
          At Sana Water, we employ advanced purification processes to ensure
          every drop meets the highest standards of safety and taste
        </p>
      </div>
      <div className="relative mt-4">
        <img className="" src={DivBg} alt="background" />
        <div className="absolute left-10 top-8 space-y-10 px-5">
          <CommitmentCard />
          <CommitmentCard />
          <CommitmentCard />
          <CommitmentCard />
        </div>
      </div>
    </div>
  );
};

export default CommitmentSection;
