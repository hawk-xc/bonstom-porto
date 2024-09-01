const Drawer = () => {
  return (
    <div className="z-50 drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label
          className="fixed flex flex-col items-center justify-center w-10 align-middle transition-all duration-150 bg-white rounded-md md:hidden aspect-square hover:shadow-md active:scale-95 active:shadow-lg top-6 right-8"
          htmlFor="my-drawer"
        >
          <i className="ri-menu-4-line text-slate-800"></i>
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="w-7/12 min-h-full p-4 menu secondary-background text-base-content">
          {/* Sidebar content here */}
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
