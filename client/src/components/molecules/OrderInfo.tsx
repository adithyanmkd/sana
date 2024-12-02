import DeliveryTruck from "../../assets/icons/delivery-van.svg";
import Arrow from "../../assets/icons/arrow-white.svg";
import MsgIcon from "../../assets/icons/msg.svg";

import Button from "../atoms/Button";

const arrowRight = {
  src: Arrow,
  alt: "arrow",
};

const OrderInfo = () => {
  return (
    <div className="bg-secondaryBg md:py-8">
      <div className="relative -top-[1px] mx-auto grid w-full max-w-screen-lg items-center space-y-4 px-5 py-6 md:grid-cols-3">
        <div className="flex items-center space-x-7">
          <img src={DeliveryTruck} alt="delivery truck" />
          <p className="text-lg font-semibold text-[#EBEBEB] md:text-2xl">
            <a href="tel:+971 4 272 3047">+971 4 272 3047</a>
          </p>
        </div>
        <div className="flex space-x-7">
          <img src={MsgIcon} alt="msg icon" />
          <p className="text-lg font-semibold text-[#EBEBEB] md:text-2xl">
            <a href="tel:+971 50 7474 835">+971 50 7474 835</a>
            <span className="block">info@sanawater.com</span>
          </p>
        </div>
        <div className="flex justify-end">
          <Button
            classname="md:h-[50px] md:px-6"
            label="Order Now"
            icon={arrowRight}
          />
        </div>
      </div>
    </div>
  );
};

export default OrderInfo;
