import B from "./../assets/bonstom.png";
import Image from "./../Particle/Image";
import Drawer from "./Drawer";

const Navbar = ({ SideBarLists, refLists, reference, currentRefIndex }) => {
  return (
    <nav className="fixed top-0 flex flex-row items-center justify-between w-full py-2 transition-all duration-200 md:z-50 md:px-8 max-sm:px-4 md:opacity-70 md:hover:opacity-100">
      <Image
        src={B}
        className={`w-12 duration-300 transition-all ${
          currentRefIndex > 0 ? "" : "white-image"
        }`}
        alt={"Bonstom Image"}
      />
      <ul
        className={`flex flex-row gap-6 max-sm:hidden duration-300 transition-all ${
          currentRefIndex > 0 ? "text-black" : "text-white"
        }`}
      >
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
