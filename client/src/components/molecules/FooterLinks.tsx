import { Link } from "react-router-dom";

type LinkProps = {
  heading: string;
  linksArray: {
    name: string;
    url: string;
  }[];
};

const FooterLinks = ({ heading, linksArray }: LinkProps) => {
  return (
    <div className="mt-8">
      <h4 className="text-[20px] font-bold text-white">{heading}</h4>
      <div className="mt-4 space-y-2 text-sm text-[#DDDDDE]">
        {linksArray.map((data, index) => (
          <Link key={index} className="block capitalize" to={data.url}>
            {data.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FooterLinks;
