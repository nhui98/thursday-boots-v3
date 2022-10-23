import { MenuData, PromotionItem } from "@constants/navbar/navbar.data";
import { Link } from "react-router-dom";

export default function DropdownMenu({
  promotionData,
  menuLinks,
}: DropdownMenuProps) {
  return (
    <div className="invisible absolute top-[5rem] left-0 hidden h-80 w-full bg-white py-8 text-black opacity-0 transition-opacity hover:visible hover:opacity-100 lg:flex">
      {/* Links */}
      <div className="flex w-[30rem] flex-col flex-wrap gap-y-8 gap-x-20 px-20 xll:w-[35rem]">
        {menuLinks.map(({ category, id, styles, href }) => (
          <ul key={id} className="flex flex-col gap-y-2">
            <li className="font-bold">{category}</li>
            <li key={id}>
              <Link
                to={href}
                className="font-semibold text-black/50 hover:text-black/30"
              >
                All Styles
              </Link>
            </li>
            {styles.map(({ id, href, style }) => (
              <li key={id}>
                <Link
                  to={href}
                  className="font-semibold text-black/50 hover:text-black/30"
                >
                  {style}
                </Link>
              </li>
            ))}
          </ul>
        ))}
      </div>

      {/* Promotion Items */}
      <div className="grid w-[calc(100vw-30rem)] auto-rows-[0] grid-rows-[repeat(1,1fr)] gap-x-3 overflow-y-hidden px-10 lg:grid-cols-[repeat(3,1fr)] xl:grid-cols-[repeat(4,1fr)] xll:w-[calc(100vw-35rem)] xll:grid-cols-[repeat(5,1fr)] xll:px-20">
        {promotionData.map(({ description, id, img, title }) => (
          <figure key={id} className="flex max-w-[12rem] flex-col gap-y-4">
            <div>
              <img
                src={img}
                alt={title}
                className="h-full w-full object-cover"
              />
            </div>
            <figcaption>
              <h2 className="text-sm font-semibold">{title}</h2>
              <p className="mt-2 text-sm font-normal">{description}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

interface DropdownMenuProps {
  promotionData: PromotionItem[];
  menuLinks: MenuData[];
}
