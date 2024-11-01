import CompanyPhoto from "../../assets/images/company-photo.svg";

const AboutCompany = () => {
  return (
    <div className="mx-auto max-w-screen-lg px-5 md:max-lg:max-w-xl">
      <h2 className="mb-5 text-2xl font-medium">
        About Company
        <span>
          <div className="mt-[6px] h-[2px] w-[100px] bg-black"></div>
        </span>
      </h2>
      <div className="lg:flex lg:space-x-8">
        <div>
          <p className="max-w-screen-md leading-[160%] text-[#494949]">
            Lorem ipsum dolor sit amet consectetur. Viverra orci auctor
            vulputate duis enim imperdiet viverra amet. Sem facilisis mattis
            mattis vitae sed id tortor vel. Eget vulputate nibh sagittis nisl
            condimentum sed placerat eget lacus. Aenean neque sagittis aliquam
            tellus neque est.Lorem ipsum dolor sit amet consectetur. Viverra
            orci auctor vulputate duis enim imperdiet viverra amet. Sem
            facilisis mattis mattis vitae sed id tortor vel.
            <span className="text-nowrap text-primary lg:hidden">
              Read More...
            </span>
            <span className="ml-[2px] hidden lg:inline">
              Eget vulputate nibh sagittis nisl condimentum sed placerat eget
              lacus. Aenean neque sagittis aliquam tellus neque est.Lorem ipsum
              dolor sit amet consectetur. Viverra orci auctor vulputate duis
              enim imperdiet viverra amet. Sem facilisis mattis mattis vitae sed
              id tortor vel. Eget vulputate nibh sagittis nisl condimentum sed
              placerat eget lacus. Aenean neque sagittis aliquam tellus neque
              est.
            </span>
          </p>
        </div>
        <div>
          <img
            className="mt-4 w-[400px] lg:w-[350px]"
            src={CompanyPhoto}
            alt="company photo"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
