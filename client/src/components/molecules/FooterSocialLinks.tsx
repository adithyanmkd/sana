import SanaLogo from "../../assets/icons/sana-logo.svg";
import FacebookIcon from "../../assets/icons/social-icons/facebook.svg";
import YouTubeIcon from "../../assets/icons/social-icons/youtube.svg";
import InstagramIcon from "../../assets/icons/social-icons/instagram.svg";
import TwitterIcon from "../../assets/icons/social-icons/twitter.svg";
import LinkdinIcon from "../../assets/icons/social-icons/linkdin.svg";
import TiktokIcon from "../../assets/icons/social-icons/tiktok.svg";

const socialLinks = [
  {
    url: "#",
    icon: FacebookIcon,
    alt: "facebook icon",
  },
  {
    url: "#",
    icon: InstagramIcon,
    alt: "instagram icon",
  },
  {
    url: "#",
    icon: YouTubeIcon,
    alt: "youtube icon",
  },
  {
    url: "#",
    icon: TwitterIcon,
    alt: "twitter icon",
  },
  {
    url: "#",
    icon: LinkdinIcon,
    alt: "linkdin icon",
  },
  {
    url: "#",
    icon: TiktokIcon,
    alt: "tiktok icon",
  },
];

const FooterSocialLinks = () => {
  return (
    <div>
      <div className="flex items-center space-x-4">
        <img className="w-[97px]" src={SanaLogo} alt="sana logo" />
        <p className="text-xl font-semibold uppercase text-white">Sana water</p>
      </div>
      <div className="mt-4">
        <p className="text-[#DDDDDE]">Follow Us</p>
        <div className="mt-2 flex space-x-4">
          {socialLinks.map((data, index) => (
            <a href={data.url} key={index}>
              <img src={data.icon} alt={data.alt} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterSocialLinks;
