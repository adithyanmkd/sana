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
        <h2 className="mb-6 text-center text-[34px] font-semibold leading-[120%] md:text-4xl">
          A Legacy of Trust and Excellence
        </h2>
        <p className="mx-auto max-w-[740px] text-sm leading-[160%] text-[#494949] md:text-center">
          Founded by{" "}
          <span className="font-semibold text-black">
            Mr. Shamsudheen Manal Parambil
          </span>
          , an Indian expatriate with a vision and relentless dedication, Sana
          Water has grown to become a household name in the UAE. Through hard
          work and a steadfast commitment to quality, Mr. Shamsudheen has built
          a thriving business that stands as a testament to his perseverance and
          entrepreneurial spirit.
        </p>
      </div>
      <div className="mx-auto mt-4 grid w-[350px] max-w-[400px] grid-cols-4 place-items-center gap-4 md:w-full md:max-w-[702px]">
        {certificates.map((certificate, index) => (
          <img
            className=""
            key={index}
            src={certificate.src}
            alt={certificate.alt}
          />
        ))}
      </div>
    </div>
  );
};

export default TrustSection;
