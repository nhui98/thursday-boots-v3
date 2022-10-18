import { MenuData } from "@components/common/Navbar/data";
import { useState } from "react";
import { AiOutlineMinus } from "react-icons/ai";
import { NavLink, useParams } from "react-router-dom";

export default function Sidebar({ links }: SidebarProps) {
  const { category } = useParams();
  const [activeDropdown, setActiveDropdown] = useState(category);

  return (
    <aside className="w-72">
      {links.map(({ id, category, styles }) => (
        <div key={id}>
          <button
            className="flex h-full w-full cursor-pointer items-center justify-between py-1"
            onClick={() =>
              setActiveDropdown((prevCategory) =>
                prevCategory === category ? undefined : category
              )
            }
          >
            <h2 className="text-sm font-semibold">{category}</h2>
            <AiOutlineMinus />
          </button>
          <ul
            className={`overflow-hidden transition-all duration-500 ${
              activeDropdown === category.toLocaleLowerCase()
                ? "max-h-screen opacity-100 ease-in"
                : "max-h-0 opacity-0 ease-out"
            }`}
          >
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
