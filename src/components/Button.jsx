const Button = ({
  content,
  bgColor,
  color,
  borderColor,
  hoverBgColor,
  responsive,
  width,
  setIsClicked,
  hamburgerBtn,
}) => {
  return (
    <button
      onClick={() => {
        hamburgerBtn && setIsClicked(false);
      }}
      style={{
        backgroundColor: bgColor,
        color: color,
        borderColor: borderColor,
        width: width,
      }}
      className={`text-sm md:text-base border py-[6px] px-4 items-center justify-center rounded-full hover:scale-95 transition-all duration-700 ${
        responsive ? "hidden md:flex" : ""
      }`}
      onMouseEnter={(e) => {
        const style = e.target.style;
        style.backgroundColor = hoverBgColor;
        style.borderColor = borderColor;
      }}
      onMouseLeave={(e) => {
        const style = e.target.style;
        style.backgroundColor = bgColor;
        style.borderColor = borderColor;
      }}
    >
      {content}
    </button>
  );
};

export default Button;
