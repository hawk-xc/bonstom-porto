import Image from "./../Particle/Image";
import bonstomImage from "./../assets/bonstom_photo.jpg";

export default function AboutMeContent() {
  return (
    <div className="flex flex-row items-center justify-center w-full h-screen gap-10 px-10 align-middle secondary-background">
      <div
        id="aboutmetitle"
        className="flex flex-col flex-1 gap-3 pl-24 pr-5 text-black"
      >
        <h2 className="text-4xl">About Me</h2>
        <span className="font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sit, porro
          quae iste alias suscipit molestias maxime minus, unde fugit,
          voluptatum laborum commodi eos impedit!
        </span>
        <button className="z-50 mt-10 text-white transition-all duration-150 ease-in w-28 btn btn-neutral hover:scale-105 active:scale-95 hover:shadow-lg">
          Resume
        </button>
      </div>
      <div
        id="bonstomImage"
        className="flex items-center justify-start flex-1 align-middle"
      >
        <Image
          src={bonstomImage}
          alt={"bonstom image"}
          className={"mask mask-squircle w-96"}
        />
      </div>
    </div>
  );
}
