import { Link } from "react-router-dom";
// import { Link as ScrollLink } from "react-scroll";

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
        {linksArray.map((data, index) =>
          data.url.startsWith("#") ? (
            // <ScrollLink
            //   key={index}
            //   to={data.url.substring(1)} // Remove '#' for ScrollLink's `to` prop
            //   smooth={true}
            //   duration={500}
            //   offset={-80} // Adjust offset for fixed headers if needed
            //   className="block cursor-pointer capitalize"
            //   >
            //   </ScrollLink>
            <a
              href={"/" + data.url}
              className="block cursor-pointer capitalize"
            >
              {data.name}
            </a>
          ) : (
            <Link
              key={index}
              className="block cursor-pointer capitalize"
              to={data.url}
            >
              {data.name}
            </Link>
          ),
        )}
      </div>
    </div>
  );
};

export default FooterLinks;
