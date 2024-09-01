const HeroSection = ({ homeRef, children }) => {
  return (
    <section ref={homeRef} className="w-full">
      {children}
    </section>
  );
};

export default HeroSection;
