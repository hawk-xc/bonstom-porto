const ContactMe = ({ contactmeRef, children }) => {
  return (
    <section ref={contactmeRef} className="w-full">
      {children}
    </section>
  );
};

export default ContactMe;
