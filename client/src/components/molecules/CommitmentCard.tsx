type CardTypes = {
  id: number;
  label: string;
  description: string;
  classname?: string;
};

const CommitmentCard = ({
  id,
  label,
  description,
  classname = "",
}: CardTypes) => {
  return (
    <div>
      <div className={`relative ${classname}`}>
        <div className="absolute -left-5 -top-5 flex size-10 items-center justify-center rounded-full border border-[#EBEBEB] bg-white">
          <h3 className="text-xl font-bold">{id}</h3>
        </div>
        <div className="h-auto w-full border border-[#EBEBEB] bg-white px-4 py-4 shadow-sm">
          <h3 className="text-xl font-semibold text-[#272727] md:text-[20px]">
            {label}
          </h3>
          <p className="mt-1 max-w-[300px] text-sm text-[#505050] md:mt-4 md:text-lg">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommitmentCard;
