const CommitmentCard = () => {
  return (
    <div>
      <div className="relative">
        <div className="absolute -left-5 -top-5 flex size-10 items-center justify-center rounded-full border border-[#EBEBEB] bg-white">
          <h3 className="text-xl font-bold">1</h3>
        </div>
        <div className="h-auto w-full border border-[#EBEBEB] bg-white px-4 py-4 shadow-sm">
          <h3 className="text-xl font-semibold text-[#505050]">
            Reverse Osmosis (RO)
          </h3>
          <p className="mt-1 text-sm text-[#505050]">
            Removes impurities at the molecular level.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommitmentCard;
