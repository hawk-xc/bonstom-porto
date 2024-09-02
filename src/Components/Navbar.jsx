import B from "./../assets/bonstom.png";
import Image from "./../Particle/Image";
import Drawer from "./Drawer";

const Navbar = ({ SideBarLists, refLists, reference, currentRefIndex }) => {
  return (
    <nav className="fixed top-0 flex flex-row items-center justify-between w-full py-5 md:z-50 md:px-8 max-sm:px-4">
      <Image src={B} className={"w-12 white-image"} alt={"Bonstom Image"} />
      <ul className="flex flex-row gap-6 text-white max-sm:hidden">
        {SideBarLists.filter((_, index) => index !== 0).map((item) => (
          <li
            key={item.name}
            className="cursor-pointer"
            onClick={() => {
              reference(refLists[item.name]);
            }}
          >
            {item.links}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
