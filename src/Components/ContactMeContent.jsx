export default function ContactMeContent() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen align-middle max-sm:px-16 md:px-56">
      <h1 className="text-3xl font-light">Get In Touch</h1>
      <span className="mt-4 font-light text-center max-sm:text-sm">
        Looking to collaborate, have questions, or just want to chat about
        creative ideas? I'm always happy to hear from you. Feel free to contact
        me, and let's see how we can create something great together!
      </span>
      <div className="flex flex-col gap-3 mt-16">
        <span className="flex flex-row gap-3">
          <i class="ri-mail-line"></i>
          <span>bonstomdigital@gmail.com</span>
        </span>
        <span className="flex flex-row gap-3">
          <i class="ri-phone-fill"></i>
          <span>+67074565744</span>
        </span>
      </div>
    </div>
  );
}
