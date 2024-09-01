const Skills = ({ children, skillsRef }) => {
  return (
    <section ref={skillsRef} className="w-full">
      {children}
    </section>
  );
};

export default Skills;
