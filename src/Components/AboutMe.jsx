const AboutMe = ({ aboutmeRef, children }) => {
  return (
    <section className="w-full" ref={aboutmeRef}>
      {children}
    </section>
  );
};

export default AboutMe;
