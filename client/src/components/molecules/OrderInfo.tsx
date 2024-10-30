import DeliveryTruck from "../../assets/icons/delivery-van.svg";
import MsgIcon from "../../assets/icons/msg.svg";

import Button from "../atoms/Button";

const OrderInfo = () => {
  return (
    <div className="bg-secondaryBg relative -top-[1px] w-full space-y-4 px-5 py-6">
      <div className="flex space-x-7">
        <img src={DeliveryTruck} alt="delivery truck" />
        <p className="text-lg font-semibold text-[#EBEBEB]">
          06 740<span className="block">8655</span>
        </p>
      </div>
      <div className="flex space-x-7">
        <img src={MsgIcon} alt="msg icon" />
        <p className="text-lg font-semibold text-[#EBEBEB]">
          +971 56 75 33072 <span className="block">info@sanawater.com</span>
        </p>
      </div>
      <div className="flex justify-end">
        <Button label="Order Now" />
      </div>
    </div>
  );
};

export default OrderInfo;