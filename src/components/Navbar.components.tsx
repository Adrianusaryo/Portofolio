import { useEffect, useState } from "react";
import { Menu } from "../constants/menu";

const Navbar = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 1);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`navbar fixed top-0 left-0 right-0 shadow-sm z-50
    transition-all duration-300 ease-in-out ${
      isFixed ? "bg-base-100 shadow-md" : "bg-transparent "
    }`}
    >
      {/* LEFT DESKTOP ONLY */}
      <div className="navbar-start hidden lg:flex">
        <a className="text-xl font-bold px-7">Portofolio</a>
      </div>

      {/* CENTER DESKTOP */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {Menu.map((item, index) => (
            <li key={index}>
              <a href={item.href}>{item.menu}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* MOBILE LAYOUT */}
      <div className="navbar-start lg:hidden">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow "
          >
            {Menu.map((item, index) => (
              <li key={index}>
                <a className="text-" href={item.href}>
                  {item.menu}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* RIGHT MOBILE TITLE */}
      <div className="navbar-end lg:hidden">
        <a className="text-xl font-bold">Portofolio</a>
      </div>
    </div>
  );
};

export default Navbar;
