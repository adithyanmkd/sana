import Logo from "../../assets/icons/sana-logo.svg";
import MenuIcon from "../../assets/icons/menu-icon.svg";

const MobielSidebar = () => {
  return (
    <div>
      <div>
        <div>
          <img className="w-16 sm:w-24 md:w-36" src={Logo} alt="sana logo" />
        </div>
        <div className="bg-purple-400">
          <img className="cursor-pointer" src={MenuIcon} alt="menu icon" />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default MobielSidebar;
