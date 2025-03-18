const HamburgerMenu = ({ isClicked, setIsClicked }) => {
  return (
    <div
      onClick={() => {
        setIsClicked(!isClicked);
      }}
      className="h-4 w-5 flex-col justify-between flex md:hidden cursor-pointer z-20"
    >
      <div
        className={`h-[2px] w-full bg-[#F6F6F6] transition-all duration-700 ${
          isClicked ? "-rotate-[50deg] translate-y-[7px]" : ""
        }`}
      ></div>
      <div
        className={`h-[2px] w-full bg-[#F6F6F6] transition-all duration-1000 ${
          isClicked ? "scale-0" : "scale-100"
        }`}
      ></div>
      <div
        className={`h-[2px] w-full bg-[#F6F6F6] transition-all duration-700 ${
          isClicked ? "rotate-[45deg] -translate-y-[6px]" : ""
        }`}
      ></div>
    </div>
  );
};

export default HamburgerMenu;
