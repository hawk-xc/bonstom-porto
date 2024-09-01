import B from "./../assets/bonstom.png";
import Image from "./../Particle/Image";
import Drawer from "./Drawer";

const Navbar = () => {
  return (
    <nav className="fixed top-0 flex flex-row items-center justify-between w-full py-5 md:px-8 max-sm:px-4">
      <Image src={B} className={"w-12 white-image"} alt={"Bonstom Image"} />
      <ul className="flex flex-row gap-6 text-white max-sm:hidden">
        <li>About Me</li>
        <li>Project</li>
        <li>Skills</li>
        <li>Contact Me</li>
      </ul>
    </nav>
  );
};

export default Navbar;
