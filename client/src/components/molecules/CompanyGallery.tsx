const CompanyGallery = () => {
  return (
    <div className="bg-secondaryBg">
      <div className="mx-auto mt-8 max-w-screen-lg px-5 pb-[30px]">
        <div className="pt-8">
          <h2 className="mb-5 text-2xl font-medium text-white">
            Gallery
            <span>
              <div className="mt-[6px] h-[2px] w-[80px] bg-white"></div>
            </span>
          </h2>
          <p className="max-w-2xl text-[#E2E6EF]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
            tempora nesciunt obcaecati natus cum atque debitis? Minus libero eos
            in.
          </p>
        </div>
        <div className="flex space-x-4 overflow-auto">
          <img
            className="mt-4 w-[300px]"
            src="gallery/gallery-1.jpg"
            alt="photo 1"
          />
          <img
            className="mt-4 w-[300px]"
            src="gallery/gallery-1.jpg"
            alt="photo 1"
          />
          <img
            className="mt-4 w-[300px]"
            src="gallery/gallery-1.jpg"
            alt="photo 1"
          />
          <img
            className="mt-4 w-[300px]"
            src="gallery/gallery-1.jpg"
            alt="photo 1"
          />
        </div>
      </div>
    </div>
  );
};

export default CompanyGallery;
