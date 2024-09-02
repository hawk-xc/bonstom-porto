import Image from "./../Particle/Image";
import bonstomImage from "./../assets/bonstom_photo.jpg";

export default function AboutMeContent() {
  return (
    <div className="flex items-center justify-center w-full h-screen px-10 align-middle md:gap-10 max-sm:gap-10 md:flex-row max-sm:flex-col-reverse secondary-background">
      <div
        id="aboutmetitle"
        className="flex flex-col flex-1 gap-3 text-black md:pl-24 max-sm:px-10 md:pr-5 max-sm:items-center"
      >
        <h2 className="text-4xl">About Me</h2>
        <span className="font-light max-sm:text-center max-sm:text-xs">
          Hi, I'm Bonstom Carvalho, a copywriter passionate about crafting words
          that captivate and inspire. Every product or service has a story, and
          I'm here to tell it. With experience across various industries, I turn
          ideas into words that move people and drive action. Let's create
          something memorable together.
        </span>
        <button className="z-30 mt-10 text-white transition-all duration-150 ease-in w-28 btn btn-neutral hover:scale-105 active:scale-95 hover:shadow-lg">
          Resume
        </button>
      </div>
      <div
        id="bonstomImage"
        className="flex flex-1 md:items-center max-sm:items-end md:justify-start max-sm:justify-center"
      >
        <Image
          src={bonstomImage}
          alt={"bonstom image"}
          className={"mask mask-squircle md:w-96 max-sm:w-7/12 shadow-md"}
        />
      </div>
    </div>
  );
}
