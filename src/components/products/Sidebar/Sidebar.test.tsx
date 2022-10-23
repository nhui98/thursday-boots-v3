import { MENU_LINKS_MEN } from "@constants/navbar/navbar.data";
import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { describe, it } from "vitest";

import Sidebar from "./Sidebar";

const router = createMemoryRouter([
  {
    path: "/",
    element: <Sidebar links={MENU_LINKS_MEN} />,
  },
]);

describe("Sidebar", () => {
  it("displays the correct number of categories", () => {
    render(<RouterProvider router={router} />);

    MENU_LINKS_MEN.map(({ category }) => {
      const categories = screen.getByRole("heading", {
        level: 2,
        name: category,
      });
      expect(categories).toBeInTheDocument();
    });
  });

  it("displays the correct number of links", () => {
    render(<RouterProvider router={router} />);

    const links = screen.getAllByRole("listitem");
    expect(links).toHaveLength(
      MENU_LINKS_MEN.reduce((acc, { styles }) => acc + styles.length, 0) +
        MENU_LINKS_MEN.length
    );
  });
});
