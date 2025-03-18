const Star = () => {
  return (
    <div>
      <svg
        className="w-9 h-9 md:w-10 md:h-10 mx-auto"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="black" strokeWidth="6" strokeLinecap="round">
          <line x1="50" y1="10" x2="50" y2="90" />
          <line x1="10" y1="50" x2="90" y2="50" />
          <line x1="20" y1="20" x2="80" y2="80" />
          <line x1="20" y1="80" x2="80" y2="20" />
        </g>
      </svg>
    </div>
  );
};

export default Star;
