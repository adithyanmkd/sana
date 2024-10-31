import Arrow from "../../assets/icons/arrow.svg";

import Button from "../atoms/Button";
import ProductCard from "../molecules/ProductCard";

const arrowRight = {
  src: Arrow,
  alt: "arrow",
  classname: "",
};

const ProductSection = () => {
  return (
    <div className="mt-8 pb-[30px]">
      <div className="mb-6 space-y-3 px-5">
        <h2 className="text-center text-[34px] font-semibold leading-[120%]">
          Our Variety of Products
        </h2>
        <p className="text-center leading-[120%] text-[#777777]">
          Premium Water Distribution, Every Drop Counts
        </p>
      </div>
      <div className="space-y-8">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <Button
        label="View All"
        classname="bg-white !text-primary border border-primary mt-[40px] mx-auto"
        icon={arrowRight}
      />
    </div>
  );
};

export default ProductSection;
