const ScrollButton = ({ scrollToNextRef, currentRefIndex }) => {
  return (
    <div
      id="scrollButton"
      className={`fixed z-50 flex items-center justify-center transition-all duration-150 rounded-full cursor-pointer bottom-10 w-14 aspect-square backdrop-blur-md hover:scale-105 active:scale-110 hover:brightness-95 ${
        currentRefIndex === 0
          ? "left-1/2 -translate-x-1/2 text-white shadow-xl"
          : "right-10"
      }`}
      onClick={scrollToNextRef}
    >
      {currentRefIndex < 5 ? (
        <i className="text-3xl ri-skip-down-fill"></i>
      ) : (
        <i className="text-3xl ri-arrow-up-double-line"></i>
      )}
    </div>
  );
};

export default ScrollButton;
