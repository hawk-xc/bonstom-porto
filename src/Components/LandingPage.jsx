import B from "./../assets/bonstom.png";
import Image from "./../Particle/Image";

export default function LandingPage() {
  return (
    <section className="h-screen w-screen flex flex-col items-center justify-center bg-custom-gradient bg-[length:200%_200%] animate-gradient-move text-white">
      <nav className="absolute top-0 flex flex-row items-center justify-between w-full px-8 py-5">
        <Image src={B} className={"w-12 white-image"} alt={"Bonstom Image"} />
        <ul className="flex flex-row gap-6">
          <li>About Me</li>
          <li>Project</li>
          <li>Skills</li>
          <li>Contact Me</li>
        </ul>
      </nav>
      <div className="text-center">
        <h1 className="text-8xl">Bonstom Carvalho</h1>
        <p className="mt-4 text-lg font-light">
          Passionate about changing the world with technology.
        </p>
      </div>
    </section>
  );
}
