const HeroSection = ({ heroRef, children }) => {
  return (
    <div ref={heroRef} className="w-full">
      {children}
    </div>
  );
};

export default HeroSection;
