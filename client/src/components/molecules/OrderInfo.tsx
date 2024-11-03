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
    <div className="bg-secondaryBg">
      <div className="relative -top-[1px] mx-auto grid w-full max-w-screen-lg items-center space-y-4 px-5 py-6 md:grid-cols-3">
        <div className="flex space-x-7">
          <img src={DeliveryTruck} alt="delivery truck" />
          <p className="text-lg font-semibold text-[#EBEBEB]">
            06 740<span className="block">8655</span>
          </p>
        </div>
        <div className="flex space-x-7">
          <img src={MsgIcon} alt="msg icon" />
          <p className="text-lg font-semibold text-[#EBEBEB]">
            +971 56 75 33072
            <span className="block">info@sanawater.com </span>
          </p>
        </div>
        <div className="flex justify-end">
          <Button label="Order Now" icon={arrowRight} />
        </div>
      </div>
    </div>
  );
};

export default OrderInfo;
