import CommitmentBgSm from "../../assets/images/commitment-bg-sm.svg";
import CommitmentBgLg from "../../assets/images/commitment-bg-lg.svg";

//screen width checking
const isDesktop = window.innerWidth >= 768;

//commitment card content
const cardContents = [
  {
    id: 1,
    label: "Reverse Osmosis (RO)",
    description: "Removes impurities at the molecular level.",
    classname: "md:left-28",
  },
  {
    id: 2,
    label: "Carbon and Sand Filtration",
    description: "Eliminates odors and sediments.",
    classname: "md:left-52",
  },
  {
    id: 3,
    label: "Microfiltration, UV Treatment, and Ozonation",
    description: "Ensures water is pure and bacteria-free.",
    classname: "md:left-28",
  },
  {
    id: 4,
    label: "Mineral Enrichment",
    description:
      "Adds the right balance of essential minerals for great taste and health benefits.",
    classname: "md:left-52",
  },
];

import CommitmentCard from "../molecules/CommitmentCard";

const CommitmentSection = () => {
  return (
    <div className="relative mt-4">
      <div className="mx-auto max-w-screen-lg px-5">
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
      <div className="relative mt-10 md:mt-12">
        {isDesktop ? (
          <img
            className="max-w-[500px]"
            src={CommitmentBgLg}
            alt="lg background"
          />
        ) : (
          <img src={CommitmentBgSm} alt="sm background" />
        )}
        <div className="absolute left-10 top-16 space-y-14 px-5 md:top-20 md:space-y-20">
          {cardContents.map((data) => (
            <CommitmentCard key={data.id} {...data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommitmentSection;
