const HeroSection = ({ heroRef, children }) => {
  return (
    <section ref={heroRef} className="w-full">
      {children}
    </section>
  );
};

export default HeroSection;
