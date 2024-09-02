import bonstom_photo from "./../assets/bonstom_photo.jpg";
import Image from "./../Particle/Image";

export default function ContactMeContent() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen align-middle max-sm:px-16 md:px-56">
      <span data-aos="zoom-out-up" className="mb-10">
        <Image
          src={bonstom_photo}
          alt={"bonstom_image_cover"}
          className={"w-20 rounded-full shadow-md"}
        />
      </span>
      <h1 className="text-3xl font-light" data-aos="zoom-in-up">
        Get In Touch
      </h1>
      <span
        className="mt-4 font-light text-center max-sm:text-sm"
        data-aos="zoom-in-up"
      >
        Looking to collaborate, have questions, or just want to chat about
        creative ideas? I'm always happy to hear from you. Feel free to contact
        me, and let's see how we can create something great together!
      </span>
      <div className="flex flex-col gap-3 mt-16">
        <span className="flex flex-row gap-3" data-aos="zoom-in-up">
          <i class="ri-mail-line"></i>
          <span>bonstomdigital@gmail.com</span>
        </span>
        <span className="flex flex-row gap-3" data-aos="zoom-in-up">
          <i class="ri-phone-fill"></i>
          <span>+67074565744</span>
        </span>
      </div>
    </div>
  );
}
