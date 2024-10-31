import Emarites from "../../assets/icons/certificates/emarites.svg";
import Iso from "../../assets/icons/certificates/iso-22000.svg";
import LowSodium from "../../assets/icons/certificates/lowSodium.svg";
import Haccp from "../../assets/icons/certificates/haccp.svg";

const certificates = [
  {
    src: Emarites,
    alt: "emarites certificate",
  },
  {
    src: Iso,
    alt: "iso certificate",
  },
  {
    src: LowSodium,
    alt: "low sodium certificate",
  },
  {
    src: Haccp,
    alt: "HACCP certificate",
  },
];

const TrustSection = () => {
  return (
    <div className="bg-[#E3F9FF] px-5 pb-[30px] pt-8">
      <div>
        <h2 className="mb-4 text-center text-[34px] font-semibold leading-[120%]">
          Trusted Standards & Certifications
        </h2>
        <p className="mx-auto max-w-[740px] leading-[160%] text-[#494949] md:text-center">
          At Sana Water Supply, our ISO 22000, HACCP, Low Sodium, and Emirates
          Quality Mark certifications reflect our commitment to delivering safe,
          pure, and high-quality water you can trust.
        </p>
      </div>
      <div className="mx-auto mt-3 grid max-w-[243px] grid-cols-2 place-items-center gap-4">
        {certificates.map((certificate, index) => (
          <img key={index} src={certificate.src} alt={certificate.alt} />
        ))}
      </div>
    </div>
  );
};

export default TrustSection;
