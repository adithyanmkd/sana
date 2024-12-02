import CompanyPhoto from "../../assets/images/company-photo.svg";

const AboutCompany = () => {
  return (
    <div className="mx-auto max-w-screen-lg px-5">
      <div className="items-center lg:flex lg:space-x-8">
        <div>
          <h2 className="mb-5 text-2xl font-medium">
            Welcome to Sana Water: Purity You Can Trust
            <span>
              <div className="mt-[6px] h-[2px] w-[200px] bg-black"></div>
            </span>
          </h2>
          <p className="max-w-screen-md text-justify leading-[160%] text-[#494949]">
            Since 1996, Sana Water has been committed to delivering pure and
            safe drinking water to our valued customers across the UAE. With a
            workforce of over 170 dedicated employees and a diverse range of
            products, we cater to the hydration needs of households, businesses,
            and communities with exceptional reliability and care.
          </p>
        </div>
        <div>
          <img
            className="mx-auto mt-4 w-[400px] lg:w-[350px]"
            src={CompanyPhoto}
            alt="company photo"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
