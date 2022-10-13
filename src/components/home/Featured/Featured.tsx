import { Link } from "react-router-dom";

import { FEATURED_DATA } from "./data";

const style1 = `col-span-1 row-span-1 lg:col-span-5 lg:row-span-2 text-xl lg:text-4xl`;
const style2 = `col-span-1 row-span-1 lg:col-span-2 lg:row-span-1 text-xl`;

const gridItemsStyles = [
  `${style1}`,
  `${style1}`,
  `${style2}`,
  `${style2} hidden lg:block`,
  `${style2}`,
  `${style2}`,
  `${style2}`,
];

export default function Featured() {
  return (
    <section className="lg:px-4">
      <div className="grid grid-cols-[repeat(1,1fr)] grid-rows-[repeat(6,1fr)] gap-4 sm:grid-cols-[repeat(2,1fr)] sm:grid-rows-[repeat(3,1fr)] lg:grid-cols-[repeat(10,1fr)]">
        {FEATURED_DATA.map(({ href, img, title, id }) => (
          <figure key={title} className={`relative ${gridItemsStyles[id]}`}>
            <Link to={href}>
              <img
                src={img}
                alt={title}
                className="h-full w-full object-cover"
              />
              <figcaption className="absolute inset-0 flex items-center justify-center text-center font-bold text-white hover:underline">
                {title}
              </figcaption>
            </Link>
          </figure>
        ))}
      </div>
    </section>
  );
}
