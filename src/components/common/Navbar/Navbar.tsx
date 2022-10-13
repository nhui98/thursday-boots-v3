import { useEffect, useState } from "react";
import {
  AiOutlineDown,
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineShopping,
} from "react-icons/ai";
import { RiAccountCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const isHome = true;

  useEffect(() => {
    function isScrolled() {
      window.scrollY > 0 ? setScrolled(true) : setScrolled(false);
    }

    window.addEventListener("scroll", isScrolled);

    return () => {
      window.removeEventListener("scroll", isScrolled);
    };
  }, []);

  return (
    <nav
      className={`fixed inset-0 z-10 flex h-[5rem] w-full min-w-[300px] items-center bg-transparent bg-white px-2 text-black sm:px-6 ${
        isHome &&
        "group lg:bg-transparent lg:text-white lg:transition-colors lg:hover:bg-white lg:hover:text-black"
      } ${isHome && scrolled && "lg:bg-white lg:text-black"}`}
    >
      {/* left */}
      <div className="flex w-1/5 sm:w-1/3 sm:gap-x-6">
        <AiOutlineMenu className="cursor-pointer text-2xl lg:hidden" />
        <AiOutlineSearch className="hidden cursor-pointer text-2xl sm:block lg:hidden" />

        <Link to={`/`}>
          <div className="hidden gap-x-2 font-semibold lg:flex lg:items-center">
            MEN <AiOutlineDown />
          </div>
        </Link>
        <Link to={`/`}>
          <div className="hidden gap-x-2 font-semibold lg:flex lg:items-center">
            WOMEN <AiOutlineDown />
          </div>
        </Link>
        <Link to={`/`} className="hidden font-semibold lg:block">
          ABOUT
        </Link>
      </div>

      {/* logo */}
      <div
        className={`logo w-3/5 text-center text-2xl transition-all duration-500 sm:w-1/3 ${
          isHome &&
          !scrolled &&
          "group-hover:2xl group-hover:translate-y-0 group-hover:text-2xl lg:translate-y-6 lg:text-3xl xl:text-4xl"
        }`}
      >
        THURSDAY BOOTS
      </div>

      {/* right */}
      <div className="flex w-1/5 justify-end gap-x-6 sm:w-1/3">
        <Link to={`/`} className="hidden font-semibold lg:block">
          HELP
        </Link>
        <Link to={`/`} className="hidden font-semibold lg:block">
          ACCOUNT
        </Link>

        <RiAccountCircleLine className="hidden cursor-pointer text-2xl sm:block lg:hidden" />
        <AiOutlineSearch className="hidden cursor-pointer text-2xl lg:block" />
        <AiOutlineShopping className="cursor-pointer text-2xl" />
      </div>
    </nav>
  );
}
