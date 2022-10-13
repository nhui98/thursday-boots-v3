import { useState } from "react";
import { Link } from "react-router-dom";

import { CollectionType, MENS_DATA, WOMENS_DATA } from "./data";

export default function FeaturedCollection() {
  const [active, setActive] = useState(true);

  return (
    <section className="my-4 flex flex-col items-center justify-center gap-y-8 overflow-x-hidden bg-lightgrey px-0 py-12 md:px-8">
      {/* Buttons */}
      <div className="hidden gap-x-8 md:flex">
        <button
          className={`w-60 rounded-full px-8 py-2 font-medium ${
            active
              ? "bg-green text-white"
              : "border-[1px] border-black/10 bg-white text-green"
          }`}
          onClick={() => setActive(true)}
        >
          MEN&apos;S BOOTS
        </button>
        <button
          className={`w-60 rounded-full px-8 py-2 font-medium ${
            !active
              ? "bg-green text-white"
              : "border-[1px] border-black/10 bg-white text-green"
          }`}
          onClick={() => setActive(false)}
        >
          WOMEN&apos;S BOOTS
        </button>
      </div>

      {/* Collection */}
      <div className="relative flex w-full flex-col items-center gap-y-4 md:block">
        <h2 className="text-center text-2xl md:hidden">Men&apos;s Boots</h2>
        {/* Men's Collection */}
        <div className="w-full overflow-auto">
          <div
            className={`${
              active ? "md:flex" : "md:hidden"
            } flex w-[calc(4*15rem)] justify-center gap-x-8 overflow-auto pb-4 md:w-full`}
          >
            {MENS_DATA.map((c) => (
              <CollectionItem key={c.id} {...c} />
            ))}
          </div>
        </div>

        <div className="mt-20 md:hidden" />

        <h2 className="text-center text-2xl md:hidden">Women&apos;s Boots</h2>
        {/* Women's Collection */}
        <div className="w-full overflow-auto">
          <div
            className={`${
              active ? "md:hidden" : "md:flex"
            } flex w-[calc(4*15rem)] justify-center gap-x-8 overflow-auto pb-4 md:w-full`}
          >
            {WOMENS_DATA.map((c) => (
              <CollectionItem key={c.id} {...c} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const CollectionItem = ({
  altImg,
  color,
  href,
  img,
  description,
  price,
  style,
}: CollectionType) => (
  <figure className="max-w-60 w-48">
    <Link to={href} className="group relative block">
      <img
        src={img}
        alt={description}
        className="visible opacity-100 group-hover:invisible group-hover:opacity-0"
      />
      <img
        src={altImg}
        alt={description}
        className="invisible absolute inset-0 opacity-0 group-hover:visible group-hover:opacity-100"
      />
    </Link>

    <figcaption className="flex flex-col items-center">
      <Link to={href} className="font-medium">
        {style}
      </Link>
      <div className="opacity-50">{color}</div>
      <div>£{price}</div>
    </figcaption>
  </figure>
);
