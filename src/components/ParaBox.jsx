const ParaBox = ({ para }) => {
  return (
    <div className="hero-text border border-white/20 w-fit px-2 md:px-3 py-[1px] md:py-[2px] relative">
      <p className="text-base md:text-lg">{para}</p>
      <div className="h-[6px] w-[10px] bg-[#32F900] absolute -left-[5px] -top-[3px]"></div>
      <div className="h-[6px] w-[10px] bg-[#32F900] absolute -left-[5px] -bottom-[3px]"></div>
      <div className="h-[6px] w-[10px] bg-[#32F900] absolute -right-[5px] -top-[3px]"></div>
      <div className="h-[6px] w-[10px] bg-[#32F900] absolute -right-[5px] -bottom-[3px]"></div>
    </div>
  );
};

export default ParaBox;
