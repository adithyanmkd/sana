type CardTypes = {
  icon: {
    path: string;
    alt: string;
  };
  label: string;
  description: string;
  classname?: string;
};

const WhyChooseCard = ({
  icon,
  label,
  description,
  classname = "",
}: CardTypes) => {
  return (
    <div
      className={`max-w-[500px] rounded-md border-b bg-white px-2 py-3 shadow-md ${classname}`}
    >
      <img src={icon.path} alt={icon.alt} />
      <h4 className="mt-5 text-lg font-bold text-[#12141D]">{label}</h4>
      <p className="mt-2.5 text-[#494949]">{description}</p>
    </div>
  );
};

export default WhyChooseCard;
