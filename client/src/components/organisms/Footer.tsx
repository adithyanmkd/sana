import FooterLinks from "../molecules/FooterLinks";
import FooterSocialLinks from "../molecules/FooterSocialLinks";

const links = [
  {
    heading: "Pages",
    linksArray: [
      {
        name: "home",
        url: "#",
      },
      {
        name: "about us",
        url: "#about",
      },
      {
        name: "products",
        url: "#products",
      },
      {
        name: "contact us",
        url: "#contact",
      },
    ],
  },
  {
    heading: "Legal",
    linksArray: [
      {
        name: "terms of service",
        url: "#",
      },
      {
        name: "privacy policy",
        url: "/privacy-policy",
      },
      {
        name: "cookie policy",
        url: "#",
      },
    ],
  },
];

const Footer = () => {
  return (
    <div className="bg-secondaryBg">
      <div className="mx-auto mt-4 max-w-screen-lg px-5 pb-[30px] pt-8">
        <FooterSocialLinks />
        <div className="grid grid-cols-2">
          {links.map((data, index) => (
            <FooterLinks key={index} {...data} />
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-[#DDDDDE]">
          ©Mobiz Technologies 2024. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
