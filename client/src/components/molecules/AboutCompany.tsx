import CompanyPhoto from "../../assets/images/company-photo.svg";

const AboutCompany = () => {
  return (
    <div className="px-5">
      <div>
        <h2 className="mb-5 text-2xl font-medium">
          About Company
          <span>
            <div className="mt-[6px] h-[2px] w-[100px] bg-black"></div>
          </span>
        </h2>
        <p className="leading-[160%] text-[#494949]">
          Lorem ipsum dolor sit amet consectetur. Viverra orci auctor vulputate
          duis enim imperdiet viverra amet. Sem facilisis mattis mattis vitae
          sed id tortor vel. Eget vulputate nibh sagittis nisl condimentum sed
          placerat eget lacus. Aenean neque sagittis aliquam tellus neque
          est.Lorem ipsum dolor sit amet consectetur. Viverra orci auctor
          vulputate duis enim imperdiet viverra amet. Sem facilisis mattis
          mattis vitae sed id tortor vel.
          <span className="text-primary text-nowrap">Read More...</span>
        </p>
      </div>
      <div>
        <img className="mt-4" src={CompanyPhoto} alt="company photo" />
      </div>
    </div>
  );
};

export default AboutCompany;
