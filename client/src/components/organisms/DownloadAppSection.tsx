import Playstore from "../../assets/icons/playstore.svg";
import Appstore from "../../assets/icons/appstore.svg";
import AppThumbnail from "../../assets/images/appThumbnail.svg";

const DownloadAppSection = () => {
  return (
    <div className="mt-2 px-5 pb-[30px]">
      <div>
        <h2 className="text-center text-[34px] font-semibold">
          Download Our App
        </h2>
        <p className="mt-4 leading-[160%] text-[#494949]">
          Download the Sana Water Supply app for easy, reliable water delivery.
          Schedule orders, track deliveries, and manage your account all in one
          place. Get started today for convenient water solutions at your
          fingertips!
        </p>
        <div className="mt-3 flex space-x-3">
          <a href="#">
            <img src={Playstore} alt="playstore icon" />
          </a>
          <a href="#">
            <img src={Appstore} alt="appstore icon" />
          </a>
        </div>
      </div>
      <div className="mt-6">
        <img src={AppThumbnail} alt="app thumbnail" />
      </div>
    </div>
  );
};

export default DownloadAppSection;
