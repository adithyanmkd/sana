import clsx from "clsx";

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
        className={clsx(
          `bg-primary h-[40px] rounded-[30px] px-[18px] text-xs text-white md:text-base ${classname}`,
          icon && "flex items-center",
        )}
      >
        {label}
        {icon && (
          <span>
            <img
              className={`ml-1 ${icon.classname}`}
              src={icon.src}
              alt={icon.alt}
            />
          </span>
        )}
      </button>
    </div>
  );
};

export default Button;
