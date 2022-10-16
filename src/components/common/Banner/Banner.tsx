import { NavLink } from "react-router-dom";

import { BannerItem, ILink } from "../../../pages/about/data";

interface BannerProps {
  bannerData: BannerItem;
  bannerLinks: ILink[];
  styledLinks?: boolean;
}

export default function Banner({
  bannerData: { alt, img, img2, title },
  bannerLinks,
  styledLinks,
}: BannerProps) {
  return (
    <section className="relative">
      <figure className="relative z-10 flex items-center justify-center">
        <img
          src={img}
          alt={alt}
          className="hidden h-full w-full object-cover lg:block"
        />
        <img
          src={img2}
          alt={alt}
          className="block h-full w-full object-cover lg:hidden"
        />
        <figcaption className="absolute w-full px-8 xl:max-w-[40rem]">
          <h2 className="text-center text-xl font-bold text-white md:text-3xl xl:text-5xl xl:leading-[4rem]">
            {title}
          </h2>
        </figcaption>
      </figure>

      <ul className="absolute bottom-0 z-20 flex h-16 w-full items-center justify-start overflow-x-auto bg-black/30 text-center text-sm tracking-wider text-white md:justify-center">
        {bannerLinks.map(({ href, id, text }) => (
          <li key={id} className="h-full">
            {styledLinks ? (
              <NavLink
                to={href}
                end
                className={({ isActive }) =>
                  `flex h-full items-center px-8 transition-colors hover:bg-white/90 hover:text-black ${
                    isActive ? "bg-white text-black" : undefined
                  }`
                }
              >
                {text}
              </NavLink>
            ) : (
              <button
                onClick={() => {
                  const el = document.querySelector(href);
                  el?.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                }}
                className={`flex h-full items-center px-8 transition-colors hover:bg-white/90 hover:text-black`}
              >
                {text}
              </button>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
