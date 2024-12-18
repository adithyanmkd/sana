import ProductFrame from "../../assets/images/frame.svg";

const ProductCard = () => {
  return (
    <div className="mx-5 flex max-w-[323px] flex-col items-center rounded-lg border border-[#B7E1EA] shadow-md shadow-[#B7E1EA]">
      <div className="relative flex">
        <div>
          <img
            className="rounded-t-lg"
            src={ProductFrame}
            alt="product frame"
          />
          <img
            className="absolute left-[70px] top-5 lg:left-14"
            src="products/water-container.png"
            alt="water container"
          />
        </div>
      </div>
      <div className="mt-4 space-y-1 px-4 pb-2">
        <h3 className="text-2xl font-medium">5Gallon</h3>
        <p className="text-[#777777]">
          Keep your pet hydrated on the go with our leak-proof, portable water
          bottle, perfect for mess-free refreshment during walks and travel.
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
