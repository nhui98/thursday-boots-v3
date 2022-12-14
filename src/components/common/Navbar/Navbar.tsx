import {
  MENS_PROMOTION_DATA,
  MENU_LINKS_MEN,
  MENU_LINKS_WOMEN,
  WOMENS_PROMOTION_DATA,
} from "@constants/navbar/navbar.data";
import { setToggleBasket } from "@store/features/flyout/flyoutSlice";
import { removeAccessToken } from "@store/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "@store/store";
import { useEffect, useState } from "react";
import {
  AiOutlineDown,
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineShopping,
} from "react-icons/ai";
import { RiAccountCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

import DropdownMenu from "./DropdownMenu";

export default function Navbar({ isHome }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const numberOfBasketItems = useAppSelector(
    (state) => state.basket.numberOfItems
  );
  const dispatch = useAppDispatch();
  const { accessToken } = useAppSelector((state) => state.user);

  useEffect(() => {
    function isScrolled() {
      window.scrollY > 0 ? setScrolled(true) : setScrolled(false);
    }

    isHome && window.addEventListener("scroll", isScrolled);

    return () => {
      window.removeEventListener("scroll", isScrolled);
    };
  }, [isHome]);

  return (
    <nav
      className={`group fixed inset-0 z-30 flex h-[5rem] w-full items-center bg-white px-2 text-black sm:px-6 ${
        isHome
          ? "lg:bg-transparent lg:text-white lg:transition-colors lg:hover:bg-white lg:hover:text-black"
          : ""
      } ${isHome ? scrolled && "lg:bg-white lg:text-black" : ""}`}
    >
      {/* left */}
      <div className="flex h-full w-1/5 items-center sm:w-1/3 sm:gap-x-6">
        <AiOutlineMenu className="cursor-pointer text-2xl lg:hidden" />
        <AiOutlineSearch className="hidden cursor-pointer text-2xl sm:block lg:hidden" />

        <div className="navbar-dropdown-link hidden h-full font-semibold lg:flex lg:items-center">
          <Link to={`/`} className="flex items-center gap-x-2">
            MEN <AiOutlineDown />
          </Link>
        </div>
        <DropdownMenu
          promotionData={MENS_PROMOTION_DATA}
          menuLinks={MENU_LINKS_MEN}
        />

        <div className="navbar-dropdown-link hidden h-full font-semibold lg:flex lg:items-center">
          <Link to={`/`} className="flex items-center gap-x-2">
            WOMEN <AiOutlineDown />
          </Link>
        </div>
        <DropdownMenu
          promotionData={WOMENS_PROMOTION_DATA}
          menuLinks={MENU_LINKS_WOMEN}
        />

        <Link to={`/about/our-story`} className="hidden font-semibold lg:block">
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
        <Link to={"/"}>THURSDAY BOOTS</Link>
      </div>

      {/* right */}
      <div className="flex w-1/5 justify-end gap-x-6 sm:w-1/3">
        <Link to={`/faq`} className="hidden font-semibold lg:block">
          HELP
        </Link>
        {!accessToken ? (
          <Link to={`/account/login`} className="hidden font-semibold lg:block">
            ACCOUNT
          </Link>
        ) : (
          <button
            className="hidden cursor-pointer font-semibold lg:block"
            onClick={() => dispatch(removeAccessToken())}
          >
            SIGNOUT
          </button>
        )}

        <RiAccountCircleLine className="hidden cursor-pointer text-2xl sm:block lg:hidden" />
        <AiOutlineSearch className="hidden cursor-pointer text-2xl lg:block" />
        <button
          className="relative"
          onClick={() => dispatch(setToggleBasket(true))}
        >
          <AiOutlineShopping className="cursor-pointer text-2xl" />
          <div className="absolute -bottom-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full border-[1px] bg-blue p-2 text-sm text-white">
            {numberOfBasketItems}
          </div>
        </button>
      </div>
    </nav>
  );
}

export interface NavbarProps {
  isHome: boolean;
}
