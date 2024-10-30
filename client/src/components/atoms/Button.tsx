type ButtonProp = {
  label: string;
  classname?: string;
  icon?: {
    src: string;
    alt: string;
    classname?: string;
  };
};

const Button = ({ label, classname = "", icon }: ButtonProp) => {
  return (
    <div>
      <button
        className={`bg-primary rounded-[30px] px-[18px] py-2 text-xs text-white md:text-base ${classname}`}
      >
        {label}
      </button>
      {icon && (
        <div>
          <img className={`${icon.classname}`} src={icon.src} alt={icon.alt} />
        </div>
      )}
    </div>
  );
};

export default Button;
