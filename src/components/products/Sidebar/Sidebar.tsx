import { MenuData } from "@constants/navbar/navbar.data";
import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { NavLink, useParams } from "react-router-dom";

export default function Sidebar({ links }: SidebarProps) {
  const { category } = useParams();
  const [activeDropdown, setActiveDropdown] = useState(category);

  return (
    <aside className="w-72">
      {links.map(({ id, category, styles, href }) => (
        <div key={id}>
          <button
            className="flex h-full w-full cursor-pointer items-center justify-between py-1"
            onClick={() =>
              setActiveDropdown((prevCategory) =>
                prevCategory !== category.toLowerCase()
                  ? category.toLocaleLowerCase()
                  : undefined
              )
            }
          >
            <h2 className="text-sm font-semibold">{category}</h2>
            {activeDropdown === category.toLowerCase() ? (
              <AiOutlineMinus />
            ) : (
              <AiOutlinePlus />
            )}
          </button>
          <ul
            className={`overflow-hidden transition-all duration-500 ${
              activeDropdown === category.toLowerCase()
                ? "max-h-screen opacity-100 ease-in"
                : "max-h-0 opacity-0 ease-out"
            }`}
          >
            <li key={id}>
              <NavLink
                to={href}
                end
                className={({ isActive }) =>
                  `block px-2 py-1 text-sm ${
                    isActive ? "bg-offwhite" : undefined
                  }`
                }
              >
                All Styles
              </NavLink>
            </li>
            {styles.map(({ id, href, style }) => (
              <li key={id}>
                <NavLink
                  to={href}
                  end
                  className={({ isActive }) =>
                    `block px-2 py-1 text-sm ${
                      isActive ? "bg-offwhite" : undefined
                    }`
                  }
                >
                  {style}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
}

export interface SidebarProps {
  links: MenuData[];
}
